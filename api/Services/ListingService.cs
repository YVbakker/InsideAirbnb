using InsideAirbnb.Models;
using InsideAirbnb.Utils;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Services;

public class ListingService : IListingService
{
    private readonly AirBNBContext _context;
    private readonly DbSet<Listing> _listings;

    public ListingService(AirBNBContext context)
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