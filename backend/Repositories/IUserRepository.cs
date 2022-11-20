namespace backend.Repositories
{
    public interface IUserRepository
    {
        //Buscar usuario por ID
        User FindById(int ID);

        //Mostrar todos los usuarios
        List<User> FindAll();

        //Guardar nuevo user
        User Create(User user);

        //Actualizar user existente
        User Update(User user);

        //Eliminar user id
        bool Remove(int id);
    }
}
