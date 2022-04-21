using InsideAirbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Services;

public class ReviewService : IReviewService
{
    private readonly Airbnb2022Context _context;
    private readonly DbSet<Review> _reviews;

    public ReviewService(Airbnb2022Context context)
    {
        _context = context;
        _reviews = context.Set<Review>();
    }

    public async Task<IEnumerable<Review>?> GetByListingId(int id)
    {
        var reviews = _reviews.Where(r => r.ListingId.Equals(id));
        if (await reviews.AnyAsync())
        {
            return await reviews.ToArrayAsync();
        }
        return null;
    }
}