using InsideAirbnb.api.Services;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirbnb.api.Controllers;

[ApiController]
[Route("[controller]")]
public class NeighbourhoodsController : ControllerBase
{
    private readonly INeighbourhoodService _neighbourhoodService;

    public NeighbourhoodsController(INeighbourhoodService neighbourhoodService)
    {
        _neighbourhoodService = neighbourhoodService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var neighbourhoods = await _neighbourhoodService.GetAll();
        return Ok(neighbourhoods);
    }
    
}