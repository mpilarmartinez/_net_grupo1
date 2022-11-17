namespace backend.Repositories
{
    public interface IUserRepository
    {
        //Buscar Usuario por ID
        User FindByID(int ID);

        //Mostrar todos los usuarios
        List<User> FindAll();

        //Crear un usuario
        User Create(User user);

        //Modificar un usuario existente
        User Update(User user);

        //Eliminar un usuario por ID
        bool Delete(int id);
    }
}
