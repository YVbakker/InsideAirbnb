using Microsoft.EntityFrameworkCore;
using InsideAirbnb.Models;
using InsideAirbnb.Utils;

namespace InsideAirbnb.Services;

public class ListingsService : IListingsService
{
    private readonly ApplicationContext _context;
    private readonly DbSet<Listing> _repo;

    public ListingsService(ApplicationContext context)
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