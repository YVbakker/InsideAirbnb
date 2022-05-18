using Microsoft.EntityFrameworkCore;
using Monolith.Models;
using Monolith.Utils;

namespace Monolith.Services;

public class ListingsService : IListingsService
{
    private readonly AirBnbContext _context;
    private readonly DbSet<Listing> _repo;

    public ListingsService(AirBnbContext context)
    {
        _context = context;
        _repo = _context.Set<Listing>();
    }

    public async Task<PaginatedList<Listing>> GetAll(int pageIndex, int pageSize)
    {
        var query = _repo.AsQueryable();
        var paginatedList = await PaginatedList<Listing>.CreateAsync(query, pageIndex, pageSize);
        return paginatedList;
    }
}