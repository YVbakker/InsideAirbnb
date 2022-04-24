using InsideAirbnb.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirbnb.Controllers;

[ApiController]
[Route("[controller]")]
public class ListingsController : ControllerBase
{
    private readonly IListingService _listingService;
    private readonly IReviewService _reviewService;

    public ListingsController(IListingService listingService, IReviewService reviewService)
    {
        _listingService = listingService;
        _reviewService = reviewService;
    }

    [Authorize]
    [HttpGet("pages/{index:int}")]
    public async Task<IActionResult> Get(int index)
    {
        const int pageSize = 10;
        var listings = await _listingService.GetPaginated(index, pageSize);
        return Ok(listings);
    }

    [HttpGet("{id:int}/reviews")]
    public async Task<IActionResult> GetReviews(int id)
    {
        var reviews = await _reviewService.GetByListingId(id);
        if (reviews is null)
        {
            return NotFound();
        }

        return Ok(reviews);
    }
}