using System.Net;
using InsideAirbnb.api.Models;
using InsideAirbnb.api.Services;
using InsideAirbnb.common.Models;
using InsideAirbnb.common.Utils;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirbnb.api.Controllers;


[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly ITokenService _tokenService;

    public UsersController(IUserService userService, ITokenService tokenService)
    {
        _userService = userService;
        _tokenService = tokenService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserRegistrationDto dto)
    {
        var result = await _userService.RegisterAsync(dto);
        return !result.Succeeded ? BadRequest(result) : StatusCode(201);
    }

    [HttpPost("authenticate")]
    public async Task<IActionResult> Login(UserLoginDto dto)
    {
        var validUser = await _userService.ValidateAsync(dto);
        if (validUser is null)
        {
            return Unauthorized();
        }

        var ipAddress = HttpContext.Connection.RemoteIpAddress ?? IPAddress.Any;
        var refreshToken = await _tokenService.CreateRefreshTokenAsync(validUser, ipAddress);
        
        HttpContext.Response.Cookies.Append("refreshToken", refreshToken.Token, new CookieOptions
        {
            HttpOnly = true,
            Expires = refreshToken.Expires,
            Secure = true,
            SameSite = SameSiteMode.None
        });

        return StatusCode(StatusCodes.Status201Created);
    }

    [HttpGet("token")]
    public async Task<IActionResult> GetFreshJwt()
    {
        var token = HttpContext.Request.Cookies["refreshToken"];
        if (token is null) return Unauthorized();
        var isTokenValid = await _tokenService.IsRefreshTokenValid(token);
        if (!isTokenValid) return Unauthorized();
        var userId = await _tokenService.GetUserIdByRefreshToken(token);
        var user = await _userService.GetById(userId);
        return Ok(new {Token = await _tokenService.CreateJwtTokenAsync(user)});
    }
}