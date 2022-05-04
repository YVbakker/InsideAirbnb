using InsideAirbnb.api.Models;

namespace InsideAirbnb.api.Services;

public interface IReviewService
{
    Task<IEnumerable<Review>?> GetByListingId(int id);
}