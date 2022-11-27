using Microsoft.AspNetCore.Cors;

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

        [HttpGet("{id:int}")]
        public User FindById(int id)
        {
            return userRepository.FindById(id);
        }

        [HttpPost]
        public User Create(User user)
        {
            return userRepository.Create(user);
        }

        [HttpPut]
        public User Update(User user)
        {
            return userRepository.Update(user);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            userRepository.Remove(id);
        }

        [HttpGet("{permission}")]
        public User FindByUserPermission(string permission)
        {
            return userRepository.FindByPermission(permission);
        }
    }
}
