using System.ComponentModel.DataAnnotations;

namespace InsideAirbnb.Models;

public class ListingLocation
{
    [Key]
    public ulong ListingId { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}

public class ListingLocationDto
{
    public ulong ListingId { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}