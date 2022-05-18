using Microsoft.AspNetCore.Authorization;
using Monolith.Models;
using Monolith.Utils;

namespace Monolith.Services;

public interface IListingsService
{
    [Authorize]
    Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize);
}