using InsideAirbnb.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.CodeAnalysis;
using Microsoft.JSInterop;
using InsideAirbnb.Models;
using InsideAirbnb.Services;

namespace InsideAirbnb.Pages;

public class IndexBase : ComponentBase
{
    [Parameter] public int Id { get; set; }
    [Inject] protected IListingsService ListingsService { get; set; } = default!;
    [Inject] private IMapboxService MapboxService { get; set; } = default!;
    [Inject] private IJSRuntime JsRuntime { get; set; } = default!;

    protected IEnumerable<ListingLocation> ListingLocations { get; set; } = default!;

    protected override async Task OnInitializedAsync()
    {
        ListingLocations = await ListingsService.GetLocations();
        foreach (var location in ListingLocations)
        {
            AddListingToMap(location);
        }
    }

    private async void AddListingToMap(ListingLocation location)
    {
        await JsRuntime.InvokeVoidAsync("addLocationToMap", location);
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var token = MapboxService.GetMapboxToken();
            await JsRuntime.InvokeVoidAsync("loadMapBox", token);
        }

        // foreach (var location in ListingLocations)
        // {
        //     AddListingToMap(location);
        // }
    }
}