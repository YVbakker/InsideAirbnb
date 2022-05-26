namespace InsideAirbnb.Models.GeoJson;

// according to RFC 7946

public class FeatureCollection
{
    public string Type => "FeatureCollection";
    public List<Feature> Features { get; set; } = new List<Feature>();
}