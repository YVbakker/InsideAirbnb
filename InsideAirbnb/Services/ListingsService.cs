using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using InsideAirbnb.Models;
using InsideAirbnb.Models.Dto;
using InsideAirbnb.Models.GeoJson;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public class ListingsService : IListingsService
{
    private readonly InsideAirbnbContext _context;
    private readonly DbSet<Listing> _listingsRepo;

    public ListingsService(InsideAirbnbContext context)
    {
        _context = context;
        _listingsRepo = _context.Set<Listing>();
    }

    public async Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize)
    {
        var query = _listingsRepo.AsQueryable();
        var paginatedList = await PaginatedList<Listing>.CreateAsync(query, pageIndex, pageSize);
        return paginatedList;
    }

    public async Task<IEnumerable<ListingLocationDto>> GetLocations()
    {
        var locations = await _listingsRepo.Select(l => new ListingLocationDto
        {
            Id = l.Id,
            Latitude = l.Latitude,
            Longitude = l.Longitude
        }).ToListAsync();
        return locations;
    }

    public async Task<string> GetLocationsAsGeoJson()
    {
        var locations = await GetLocations();
        var featureCollection = new FeatureCollection();
        foreach (var location in locations)
        {
            featureCollection.Features.Add(new Feature
            {
                Geometry = new GeometryPoint(location.Latitude, location.Longitude),
                Properties = new Properties {Id = location.Id}
            });
        }

        var serializeOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        return JsonSerializer.Serialize(featureCollection, serializeOptions);
    }

    public Task<Listing?> GetListingById(int listingId)
    {
        return _listingsRepo.FirstOrDefaultAsync(e => e.Id.Equals(listingId));
    }

    public async Task<IEnumerable<StatisticsDto>> GetNumberOfListingsPerNeighborhood()
    {
        var stats = await _listingsRepo.GroupBy(e => e.NeighbourhoodCleansed).Select(e => new StatisticsDto()
        {
            Label = e.Key ?? "unlisted",
            Value = e.Select(listing => listing.NeighbourhoodCleansed).Count()
        }).ToListAsync();
        return stats;
    }
}