using Microsoft.AspNetCore.Authorization;
using InsideAirbnb.Models;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public interface IListingsService
{
    [Authorize]
    Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize);
    Task<IEnumerable<ListingLocation>> GetLocations();
    Task<string> GetLocationsAsGeoJson();
    Task<Listing?> GetListingById(ulong listingId);
}