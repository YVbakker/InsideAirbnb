using InsideAirbnb.Models;
using Microsoft.EntityFrameworkCore;

namespace InsideAirbnb.Services;

public class NeighbourhoodService : INeighbourhoodService
{
    private readonly Airbnb2022Context _context;
    private readonly DbSet<Neighbourhood> _neighbourhoods;

    public NeighbourhoodService(Airbnb2022Context context)
    {
        _context = context;
        _neighbourhoods = context.Set<Neighbourhood>();
    }

    public async Task<IEnumerable<Neighbourhood>> GetAll()
    {
        return await _neighbourhoods.ToArrayAsync();
    }
}