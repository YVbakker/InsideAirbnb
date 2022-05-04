using System.Security.Claims;
using InsideAirbnb.api.Models;
using InsideAirbnb.common.Models;
using InsideAirbnb.common.Utils;
using Microsoft.AspNetCore.Identity;

namespace InsideAirbnb.api.Services;

public interface IUserService
{
    Task<IdentityResult> RegisterAsync(UserRegistrationDto dto);
    Task<User?> ValidateAsync(UserLoginDto dto);
    Task<List<Claim>> GetClaims(User user);
}