using InsideAirbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Services;

public class NeighbourhoodService : INeighbourhoodService
{
    private readonly AirBnbContext _context;
    private readonly DbSet<Neighbourhood> _neighbourhoods;

    public NeighbourhoodService(AirBnbContext context)
    {
        _context = context;
        _neighbourhoods = context.Set<Neighbourhood>();
    }

    public async Task<IEnumerable<Neighbourhood>> GetAll()
    {
        return await _neighbourhoods.ToArrayAsync();
    }
}