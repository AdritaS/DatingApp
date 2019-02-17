using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(20,MinimumLength=3,ErrorMessage="Between 3 and 20 characters")]
        public string Password { get; set; }
        public string Name { get; set; }
    }
}