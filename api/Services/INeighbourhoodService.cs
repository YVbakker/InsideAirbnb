using InsideAirbnb.api.Models;

namespace InsideAirbnb.api.Services;

public interface INeighbourhoodService
{
    Task<IEnumerable<Neighbourhood>> GetAll();
}