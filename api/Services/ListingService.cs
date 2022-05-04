using InsideAirbnb.api.Models;
using InsideAirbnb.api.Models.Parameters;
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

    private IQueryable<Listing> CreateFiltersQuery(ListingParameters param)
    {
        var queryable = _listings.AsQueryable();
        if (!string.IsNullOrEmpty(param.Price))
        {
            queryable = queryable.Where(l => l.Price != null && l.Price.Equals(param.Price));
        }

        if (!string.IsNullOrEmpty(param.Neighbourhood))
        {
            queryable = queryable.Where(l => l.Neighbourhood != null && l.Neighbourhood.Equals(param.Neighbourhood));
        }

        if (param.ReviewScoresRating.HasValue)
        {
            queryable = queryable.Where(l =>
                l.ReviewScoresRating.HasValue && l.ReviewScoresRating.Equals(param.ReviewScoresRating.Value));
        }

        return queryable;
    }
}