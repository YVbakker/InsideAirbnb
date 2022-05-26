namespace InsideAirbnb.Models.GeoJson;

// according to RFC 7946
public class Feature
{
    public string Type => "feature";
    public GeometryPoint Geometry { get; set; }
}