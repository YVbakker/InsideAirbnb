using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using InsideAirbnb.api.Models;

namespace InsideAirbnb.api.Services;

public interface ITokenService
{
    public Task<string> CreateJwtTokenAsync(User user);
    public Task<JwtSecurityToken> CreateJwtTokenAsync(string refreshToken);
    public Task<RefreshToken> CreateRefreshTokenAsync(User user, IPAddress ip);
    public Task<bool> IsRefreshTokenValid(string tokenString);
    public Task<string> GetUserIdByRefreshToken(string tokenString);
}