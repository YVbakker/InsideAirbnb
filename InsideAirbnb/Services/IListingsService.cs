using Microsoft.AspNetCore.Authorization;
using InsideAirbnb.Models;
using InsideAirbnb.Models.Dto;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public interface IListingsService
{
    [Authorize]
    Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize);
    Task<IEnumerable<ListingLocationDto>> GetLocations();
    Task<string> GetLocationsAsGeoJson();
    Task<Listing?> GetListingById(int listingId);
    Task<IEnumerable<StatisticsDto>> GetNumberOfListingsPerNeighborhood();
}