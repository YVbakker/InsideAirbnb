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
    protected string GeoJson { get; set; } = "GeoJSON";

    protected override async Task OnInitializedAsync()
    {
        
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var token = MapboxService.GetMapboxToken();
            GeoJson = await ListingsService.GetLocationsAsGeoJson();
            await JsRuntime.InvokeVoidAsync("loadMapBox", token, GeoJson);
        }

        // foreach (var location in ListingLocations)
        // {
        //     AddListingToMap(location);
        // }
    }
}