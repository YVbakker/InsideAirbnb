using InsideAirbnb.Models;

namespace InsideAirbnb.Services;

public interface IReviewService
{
    Task<IEnumerable<Review>?> GetByListingId(int id);
}