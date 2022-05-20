namespace InsideAirbnb.Services;

public class MapboxService : IMapboxService
{
    private readonly IConfiguration _configuration;

    public MapboxService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string GetMapboxToken()
    {
        var token = _configuration.GetSection("Mapbox").GetValue<string>("Token") ??
                    throw new Exception("Expected a Mapbox token but received none.");
        return token;
    }
}