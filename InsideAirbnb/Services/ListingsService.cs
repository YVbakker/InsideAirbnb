using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using InsideAirbnb.Models;
using InsideAirbnb.Models.Dto;
using InsideAirbnb.Models.GeoJson;
using InsideAirbnb.Models.Parameters;
using InsideAirbnb.Utils;
using Microsoft.Extensions.Caching.Distributed;

namespace InsideAirbnb.Services;

public class ListingsService : IListingsService
{
    private readonly InsideAirbnbContext _context;
    private readonly IDistributedCache _cache;
    private readonly DbSet<Listing> _listingsRepo;

    public ListingsService(InsideAirbnbContext context, IDistributedCache cache)
    {
        _context = context;
        _cache = cache;
        _listingsRepo = _context.Set<Listing>();
    }

    public async Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize)
    {
        var query = _listingsRepo.AsQueryable();
        var paginatedList = await PaginatedList<Listing>.CreateAsync(query, pageIndex, pageSize);
        return paginatedList;
    }

    public async Task<IEnumerable<ListingLocationDto>> GetLocations(ListingParameters parameters)
    {
        var locations = await _listingsRepo.Select(l => new ListingLocationDto
        {
            Id = l.Id,
            Latitude = l.Latitude,
            Longitude = l.Longitude,
            NeighbourhoodCleansed = l.NeighbourhoodCleansed,
            Price = l.Price,
            ReviewScoresRating = l.ReviewScoresRating
        }).ToListAsync();
        
        var query = locations.AsQueryable();
        if (parameters.Price.HasValue)
        {
            query = query.Where(e => PriceParser.Parse(e.Price ?? "$0.00") <= parameters.Price.Value);
        }

        if (!string.IsNullOrEmpty(parameters.Neighborhood))
        {
            query = query.Where(e =>
                e.NeighbourhoodCleansed != null && e.NeighbourhoodCleansed.Equals(parameters.Neighborhood));
        }

        if (parameters.Review.HasValue)
        {
            query = query.Where(e =>
                e.ReviewScoresRating != null && e.ReviewScoresRating.Value >= parameters.Review.Value);
        }
        
        return query.AsEnumerable();
    }

    public async Task<string> GetLocationsAsGeoJson(ListingParameters parameters)
    {
        var serializeOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
        
        var jsonParameters = JsonSerializer.Serialize(parameters, serializeOptions);
        
        var encodedCachedJsonParameters = await _cache.GetAsync("cachedParameters");
        if (encodedCachedJsonParameters != null)
        {
            var cachedParameters = Encoding.UTF8.GetString(encodedCachedJsonParameters);
            if (cachedParameters.Equals(jsonParameters))
            {
                var cachedGeoJson = await _cache.GetAsync("cachedGeoJson");
                if (cachedGeoJson != null)
                {
                    return Encoding.UTF8.GetString(cachedGeoJson);
                }
            }
        }
        //if cached parameters exist, and are the same, get GeoJson from cache
        //else generate new GeoJson and write it and the new parameters to cache.
        var locations = await GetLocations(parameters);
        var featureCollection = new FeatureCollection();
        foreach (var location in locations)
        {
            featureCollection.Features.Add(new Feature
            {
                Geometry = new GeometryPoint(location.Latitude, location.Longitude),
                Properties = new Properties {Id = location.Id}
            });
        }
        var json = JsonSerializer.Serialize(featureCollection, serializeOptions);
        var encodedJson = Encoding.UTF8.GetBytes(json);
        var encodedJsonParameters = Encoding.UTF8.GetBytes(jsonParameters);
        await _cache.SetAsync("cachedParameters", encodedJsonParameters);
        await _cache.SetAsync("cachedGeoJson", encodedJson);

        return json;
    }

    public Task<Listing?> GetListingById(int listingId)
    {
        return _listingsRepo.FirstOrDefaultAsync(e => e.Id.Equals(listingId));
    }

    public async Task<IList<StatisticsDto>> GetNumberOfListingsPerNeighborhood()
    {
        var stats = await _listingsRepo.GroupBy(e => e.NeighbourhoodCleansed).Select(e => new StatisticsDto()
        {
            Label = e.Key ?? "unlisted",
            Value = e.Select(listing => listing.NeighbourhoodCleansed).Count()
        }).ToListAsync();
        return stats;
    }

    public async Task<IList<StatisticsDto>> GetAvgPricePerNeighborhood()
    {
        var priceNeighborhoodGrouped = await _listingsRepo.Select(e => new PriceNeighborhoodDto
        {
            Price = e.Price,
            NeighbourhoodCleansed = e.NeighbourhoodCleansed
        }).ToListAsync();

        var stats = priceNeighborhoodGrouped.GroupBy(e => e.NeighbourhoodCleansed).Select(e => new StatisticsDto
        {
            Label = e.Key ?? "unlisted",
            Value = (float) e.Select(listing => PriceParser.Parse(listing.Price ?? string.Empty)).Average()
        }).ToList();
        return stats;
    }

    public Task<List<string?>> GetNeighborhoods()
    {
        return _listingsRepo.Select(e => e.NeighbourhoodCleansed).Distinct().ToListAsync();
    }
}