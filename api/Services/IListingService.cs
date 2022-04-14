using InsideAirbnb.Models;

namespace InsideAirbnb.Services;

public interface IListingService
{
    Task<IEnumerable<Listing>> GetAll();
}