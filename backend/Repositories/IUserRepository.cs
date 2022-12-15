namespace backend.Repositories
{
    public interface IUserRepository
    {
        User FindById(int ID);
        List<User> FindAll();
        User Create(User user);
        User Update(User user);
        bool Remove(int id);
        User FindByPermission(string permission);
        User FindEmailPasswordLogin(string email, string password);
    }
}
