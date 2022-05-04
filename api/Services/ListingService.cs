using InsideAirbnb.api.Models;
using InsideAirbnb.common.Utils;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.api.Services;

public class ListingService : IListingService
{
    private readonly AirBnbContext _context;
    private readonly DbSet<Listing> _listings;

    public ListingService(AirBnbContext context)
    {
        _context = context;
        _listings = context.Set<Listing>();
    }

    public async Task<PaginatedList<Listing>> GetPaginated(int pageIndex, int pageSize)
    {
        var query = _listings.AsQueryable();
        var paginatedList = await PaginatedList<Listing>.CreateAsync(query, pageIndex, pageSize);
        return paginatedList;
    }
}