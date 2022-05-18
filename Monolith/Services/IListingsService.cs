using InsideAirbnb.common.Utils;
using Microsoft.AspNetCore.Authorization;
using Monolith.Models;

namespace Monolith.Services;

public interface IListingsService
{
    [Authorize]
    Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize);
}