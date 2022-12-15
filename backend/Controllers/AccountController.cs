namespace backend.Controllers
{
    //[EnableCors]
    [ApiController]
    [Route("api/account")]
    public class AccountController
    {
        private IUserRepository userRepository;

        public AccountController(IUserRepository userRepo)
        {
            this.userRepository = userRepo;
        }

        [HttpPost("login")]
        public User Login(Login login)
        {
            var user = userRepository.FindEmailPasswordLogin(login.Email, login.Password);

            return user; 
        }
    }
}
