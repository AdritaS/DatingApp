using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto userForRegisterDto)
        {


            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repo.UserExists(userForRegisterDto.Username))
                // return BadRequest("Username is Taken");
                ModelState.AddModelError("Username", "Username already exists.");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userToCreate = new User
            {
                UserName = userForRegisterDto.Username,
                Name = userForRegisterDto.Name
            };

            var createUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserForRegisterDto userForRegisterDto)
        {
            var userFromRepo = _repo.Login(userForRegisterDto.Username,userForRegisterDto.Password);

            if(userFromRepo == null)
                return Unauthorized();


            var tokenHandler = new JwtSecurityTokenHandler();    
            return Unauthorized();
        }
    }
}