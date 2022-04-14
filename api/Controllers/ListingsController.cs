using InsideAirbnb.Services;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirbnb.Controllers;

[ApiController]
[Route("[controller]")]
public class ListingsController : ControllerBase
{
    private readonly IListingService _listingService;

    public ListingsController(IListingService listingService)
    {
        _listingService = listingService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var listings = await _listingService.GetAll();
        return Ok(listings);
    }
    
}