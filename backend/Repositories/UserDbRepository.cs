namespace backend.Repositories
{
    public class UserDbRepository : IUserRepository
    {
        //Atributos
        private AppDbContext context;

        public UserDbRepository(AppDbContext context)
        {
            this.context = context;
        }

        //Métodos de la interfaz IUserRepository
        public User FindByID(int ID)
        {
            return context.Users.Find(ID);
        }

        public List<User> FindAll()
        {
            return context.Users.ToList();
        }

        public User Create(User user)
        {
            if (user.Id > 0)
            {
                return Update(user);
            }

            context.Users.Add(user);
            context.SaveChanges();

            return user;
        }

        public bool Delete(int id)
        {
            User user = FindByID(id);

            if (user == null)
            {
                return false;
            }

            context.Users.Remove(user);
            context.SaveChanges();

            return true;
        }

        public User Update(User user)
        {
            if (user.Id > 0)
            {
                return Create(user);
            }

            User userDB = FindByID(user.Id);
            userDB.Name = user.Name;
            userDB.Email = user.Email;

            context.Users.Update(userDB);
            context.SaveChanges();

            return userDB;
        }
    }
}
