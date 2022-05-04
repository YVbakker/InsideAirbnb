using InsideAirbnb.api.Models;
using InsideAirbnb.common.Utils;

namespace InsideAirbnb.api.Services;

public interface IListingService
{
    Task<PaginatedList<Listing>> GetPaginated(int pageIndex, int pageSize);
}