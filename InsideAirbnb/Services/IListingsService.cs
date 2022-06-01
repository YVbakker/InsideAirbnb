using Microsoft.AspNetCore.Authorization;
using InsideAirbnb.Models;
using InsideAirbnb.Models.Dto;
using InsideAirbnb.Models.Parameters;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public interface IListingsService
{
    [Authorize]
    Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize);
    Task<IEnumerable<ListingLocationDto>> GetLocations(ListingParameters parameters);
    Task<string> GetLocationsAsGeoJson(ListingParameters parameters);
    Task<Listing?> GetListingById(int listingId);
    Task<IList<StatisticsDto>> GetNumberOfListingsPerNeighborhood();
    Task<IList<StatisticsDto>> GetAvgPricePerNeighborhood();
    Task<List<string?>> GetNeighborhoods();
}