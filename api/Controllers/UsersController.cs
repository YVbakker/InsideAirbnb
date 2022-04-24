using InsideAirbnb.Models;
using InsideAirbnb.Services;
using Microsoft.AspNetCore.Mvc;

namespace InsideAirbnb.Controllers;


[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
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
        var valid = await _userService.ValidateAsync(dto);
        if (!valid)
        {
            return Unauthorized();
        }

        return Ok(new {Token = await _userService.CreateTokenAsync()});
    }
}