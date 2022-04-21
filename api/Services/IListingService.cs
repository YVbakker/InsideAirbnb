using InsideAirbnb.Models;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public interface IListingService
{
    Task<PaginatedList<Listing>> GetPaginated(int pageIndex, int pageSize);
}