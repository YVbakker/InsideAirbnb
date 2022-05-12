using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using InsideAirbnb.api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.IdentityModel.Tokens;

namespace InsideAirbnb.api.Services;

public class TokenService : ITokenService
{
    private readonly IConfiguration _config;
    private readonly IDistributedCache _cache;
    private readonly IUserService _userService;
    private readonly IdentityContext _identityContext;
    private readonly DbSet<RefreshToken> _refreshTokensRepo;

    public TokenService(IConfiguration config, IUserService userService, IDistributedCache cache,
        IdentityContext identityContext)
    {
        _config = config;
        _userService = userService;
        _cache = cache;
        _identityContext = identityContext;
        _refreshTokensRepo = _identityContext.Set<RefreshToken>();
    }

    public async Task<string> CreateJwtTokenAsync(User user)
    {
        var signingCredentials = GetSigningCredentials();
        var claims = await _userService.GetClaims(user);
        var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
        return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
    }

    public Task<JwtSecurityToken> CreateJwtTokenAsync(string refreshToken)
    {
        throw new NotImplementedException();
    }

    public async Task<RefreshToken> CreateRefreshTokenAsync(User user, IPAddress ip)
    {
        using var rng = RandomNumberGenerator.Create();
        var randomBytes = new byte[64];
        rng.GetBytes(randomBytes);
        var cryptoString = Convert.ToBase64String(randomBytes);
        var token = new RefreshToken
        {
            Token = cryptoString,
            Created = DateTime.UtcNow,
            Expires = DateTime.UtcNow.AddDays(14),
            CreatedByIp = ip.ToString(),
            UserId = user.Id
        };
        _refreshTokensRepo.Add(token);
        await _identityContext.SaveChangesAsync();
        return token;
    }

    public async Task<string> GetUserIdByRefreshToken(string tokenString)
    {
        var token = await _refreshTokensRepo.FirstAsync(e => e.Token.Equals(tokenString));
        return token.UserId;
    }

    public async Task<bool> IsRefreshTokenValid(string tokenString)
    {
        var token = await _refreshTokensRepo.FirstOrDefaultAsync(e => e.Token.Equals(tokenString));
        return !token?.IsExpired ?? false;
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