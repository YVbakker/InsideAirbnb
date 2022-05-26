using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using InsideAirbnb.Models;
using InsideAirbnb.Models.GeoJson;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public class ListingsService : IListingsService
{
    private readonly ApplicationContext _context;
    private readonly DbSet<Listing> _listingsRepo;
    private readonly DbSet<ListingLocation> _listingLocationsRepo;

    public ListingsService(ApplicationContext context)
    {
        _context = context;
        _listingsRepo = _context.Set<Listing>();
        _listingLocationsRepo = _context.Set<ListingLocation>();
    }

    public async Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize)
    {
        var query = _listingsRepo.AsQueryable();
        var paginatedList = await PaginatedList<Listing>.CreateAsync(query, pageIndex, pageSize);
        return paginatedList;
    }

    public async Task<IEnumerable<ListingLocation>> GetLocations()
    {
        return await _listingLocationsRepo.ToArrayAsync();
    }

    public async Task<string> GetLocationsAsGeoJson()
    {
        var locations = await _listingLocationsRepo.ToListAsync();
        var featureCollection = new FeatureCollection();
        foreach (var location in locations)
        {
            featureCollection.Features.Add(new Feature()
            {
                Geometry = new GeometryPoint(location.Latitude, location.Longitude)
            });
        }
        
        var serializeOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        return JsonSerializer.Serialize(featureCollection, serializeOptions);
    }
}