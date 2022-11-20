namespace backend.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController
    {
        private IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet]
        public List<User> FindAll()
        {
            return userRepository.FindAll();
        }

    }
}
