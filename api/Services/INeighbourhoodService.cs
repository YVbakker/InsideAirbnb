using InsideAirbnb.Models;

namespace InsideAirbnb.Services;

public interface INeighbourhoodService
{
    Task<IEnumerable<Neighbourhood>> GetAll();
}