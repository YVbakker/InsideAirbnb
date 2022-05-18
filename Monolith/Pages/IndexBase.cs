using Microsoft.AspNetCore.Components;
using Monolith.Models;
using Monolith.Services;

namespace Monolith.Pages;

public class IndexBase : ComponentBase
{
    [Parameter] public int PageIndex { get; set; } = 1;
    [Parameter] public int PageSize { get; set; } = 10;
    [Inject] protected IListingsService ListingsService { get; set; } = default!;
    protected ICollection<Listing> Listings { get; set; } = default!;

    protected override async Task OnInitializedAsync()
    {
        Listings = await ListingsService.GetAll(PageIndex, PageSize);
    }
    
    
}