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

        return Ok(new {Token = await _tokenService.CreateJwtTokenAsync(validUser)});
    }
}