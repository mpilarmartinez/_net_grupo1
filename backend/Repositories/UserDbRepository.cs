namespace backend.Repositories
{
    public class UserDbRepository : IUserRepository
    {
        //Atributos
        private AppDbContext context;

        //Constructor
        public UserDbRepository(AppDbContext context)
        {
            this.context = context;
        }

        //Métodos interfaz IUserRepository
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

        public List<User> FindAll()
        {
            return context.Users.ToList();
        }

        public User FindById(int ID)
        {
            return context.Users.Find(ID);
        }

        public User FindByPermission(string permission)
        {
            return context.Users.Where(per => per.Permissions == permission).First();
        }

        public bool Remove(int id)
        {
            User user = FindById(id);

            if (user == null) return false;

            context.Users.Remove(user);
            context.SaveChanges();

            return true;
        }

        public User Update(User user)
        {
            if (user.Id == 0)
            {
                return Create(user);
            }

            context.Users.Attach(user);
            context.Entry(user).Property(b => b.Name).IsModified = true;
            context.Entry(user).Property(b => b.Email).IsModified = true;

            context.Users.Update(user);
            context.SaveChanges();

            return user;
        }
    }
}
