using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using InsideAirbnb.api.Models;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.IdentityModel.Tokens;

namespace InsideAirbnb.api.Services;

public class TokenService : ITokenService
{
    private readonly IConfiguration _config;
    private readonly IDistributedCache _cache;
    private readonly IUserService _userService;
    
    public TokenService(IConfiguration config, IUserService userService, IDistributedCache cache)
    {
        _config = config;
        _userService = userService;
        _cache = cache;
    }

    public async Task<string> CreateJwtTokenAsync(User user)
    {
        var signingCredentials = GetSigningCredentials();
        var claims = await _userService.GetClaims(user);
        var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
        return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
    }
    
    private SigningCredentials GetSigningCredentials()
    {
        var jwtConfig = _config.GetSection("jwtConfig");
        var key = Encoding.UTF8.GetBytes(jwtConfig["Secret"]);
        var secret = new SymmetricSecurityKey(key);
        return new SigningCredentials(secret, SecurityAlgorithms.HmacSha512);
    }
    
    private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, IEnumerable<Claim> claims)
    {
        var jwtSettings = _config.GetSection("JwtConfig");
        var tokenOptions = new JwtSecurityToken
        (
            jwtSettings["validIssuer"],
            jwtSettings["validAudience"],
            claims,
            expires: DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings["expiresIn"])),
            signingCredentials: signingCredentials
        );
        return tokenOptions;
    }
}