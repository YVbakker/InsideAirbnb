namespace InsideAirbnb.Models.Dto;

public class ListingLocationDto
{
    public int? Id { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    
    public string? NeighbourhoodCleansed { get; set; }
    public string? Price { get; set; }
    public double? ReviewScoresRating { get; set; }
}