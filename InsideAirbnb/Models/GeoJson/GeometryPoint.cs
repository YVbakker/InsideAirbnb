namespace InsideAirbnb.Models.GeoJson;

// according to RFC 7946
public class GeometryPoint
{
    public string Type => "Point";
    public List<double> Coordinates { get; set; }

    public GeometryPoint(double latitude, double longitude)
    {
        Coordinates = new List<double>
        {
            longitude,
            latitude
        };
    }
}