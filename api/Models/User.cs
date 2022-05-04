using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace InsideAirbnb.api.Models;

public class User : IdentityUser
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
}

public class UserRegistrationDto
{
    public string? FirstName { get; init; }
    public string? LastName { get; init; }

    [Required(ErrorMessage = "Username is required")]
    public string? UserName { get; init; }

    [Required(ErrorMessage = "Password is required")]
    public string? Password { get; init; }
    public string? Email { get; init; }
    public string? PhoneNumber { get; init; }
}