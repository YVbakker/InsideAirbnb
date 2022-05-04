using InsideAirbnb.api.Models;

namespace InsideAirbnb.api.Services;

public interface ITokenService
{
    public Task<string> CreateJwtTokenAsync(User user);

}