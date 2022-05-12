using System.ComponentModel.DataAnnotations;

namespace InsideAirbnb.api.Models;

public class RefreshToken
{
    [Key]
    public int Id { get; set; }
    public string Token { get; set; }
    public string UserId { get; set; }
    public DateTime Expires { get; set; }
    public DateTime Created { get; set; }
    public string CreatedByIp { get; set; }
    public DateTime? Revoked { get; set; }
    public bool IsExpired => DateTime.UtcNow >= Expires;
    public bool IsRevoked => Revoked != null;
    public bool IsActive => !IsRevoked && !IsExpired;
}