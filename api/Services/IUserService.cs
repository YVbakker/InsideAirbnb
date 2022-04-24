using InsideAirbnb.Models;
using Microsoft.AspNetCore.Identity;

namespace InsideAirbnb.Services;

public interface IUserService
{
    // Task<IdentityResult> Update(User user);
    // Task Delete();
    Task<IdentityResult> RegisterAsync(UserRegistrationDto dto);
    Task<bool> ValidateAsync(UserLoginDto dto);
    Task<string> CreateTokenAsync();
    
}