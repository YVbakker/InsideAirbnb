using InsideAirbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Services;

public class ListingService : IListingService
{
    private readonly Airbnb2022Context _context;
    private readonly DbSet<Listing> _listings;

    public ListingService(Airbnb2022Context context)
    {
        _context = context;
        _listings = context.Set<Listing>();
    }

    public async Task<IEnumerable<Listing>> GetAll()
    {
        return await _listings.ToArrayAsync();
    }
}