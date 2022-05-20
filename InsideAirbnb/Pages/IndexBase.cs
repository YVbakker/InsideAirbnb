using InsideAirbnb.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.CodeAnalysis;
using Microsoft.JSInterop;
using InsideAirbnb.Models;
using InsideAirbnb.Services;

namespace InsideAirbnb.Pages;

public class IndexBase : ComponentBase
{
    [Parameter] public int PageIndex { get; set; } = 1;
    [Parameter] public int PageSize { get; set; } = 10;
    [Inject] protected IListingsService ListingsService { get; set; } = default!;
    [Inject] private IMapboxService MapboxService { get; set; } = default!;
    [Inject] private IJSRuntime JsRuntime { get; set; } = default!;
    protected ICollection<Listing> Listings { get; set; } = default!;

    protected override async Task OnInitializedAsync()
    {
        Listings = await ListingsService.GetAll(PageIndex, PageSize);
    }

    private async void AddListingToMap(Listing listing)
    {
        await JsRuntime.InvokeVoidAsync("addLocationToMap", listing);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var token = MapboxService.GetMapboxToken();
            await JsRuntime.InvokeVoidAsync("loadMapBox", token);
            Listings.ToList().ForEach(AddListingToMap);
        }
    }

}