using System.Security.Claims;
using InsideAirbnb.api.Models;
using InsideAirbnb.common.Models;
using Mapster;
using Microsoft.AspNetCore.Identity;

namespace InsideAirbnb.api.Services;

public class UserService : IUserService
{
    private readonly UserManager<User> _userManager;
    private readonly IConfiguration _configuration;

    public UserService(UserManager<User> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    public async Task<IdentityResult> RegisterAsync(UserRegistrationDto dto)
    {
        var user = dto.Adapt<User>();
        return await _userManager.CreateAsync(user, dto.Password);
    }
    
    public async Task<User?> ValidateAsync(UserLoginDto dto)
    {
        var user = await _userManager.FindByNameAsync(dto.UserName);
        if (user is null)
        {
            return null;
        }
        var isValid = await _userManager.CheckPasswordAsync(user, dto.Password);
        return !isValid ? null : user;
    }

    public async Task<List<Claim>> GetClaims(User user)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.Name, user.UserName)
        };
        var roles = await _userManager.GetRolesAsync(user);
        claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

        return claims;
    }
}