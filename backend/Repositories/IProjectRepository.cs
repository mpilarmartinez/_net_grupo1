namespace backend.Repositories
{
    public interface IProjectRepository
    {
        //Buscar Proyecto por ID
        Project FindByID(int ID);

        //Mostrar todos los proyectos
        List<Project> FindAll();

        //Crear un proyecto
        Project Create(Project project);

        //Modificar un proyecto existente
        Project Update(Project project);

        //Eliminar un proyecto por ID
        bool Delete(int id);
        //asociacion
        List<Department> FindByTaskId(int id);
    }
}

