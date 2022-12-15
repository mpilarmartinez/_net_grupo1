using Task = backend.Models.Task;

namespace backend.Repositories;

    public interface ITaskRepository
    {
        //Guardar nuevo
        Task CreateTask(Task task); 

        // buscar por id
        Task FindByIdTask(int id);

        // buscar  todos
        List<Task> FindAll();

        // buscar por  importancia
        //List<Task> FindByImportanceTask(string importancetask);

        // buscar por status
        //List<Task> FindByStatusTask(string statustask);

        // buscar por id incluyendo asociaciones: Project, TaskDepartment
        //Task FindByIdWithInclude(int id);

        //Actualizar Task
        Task UpdateTask(Task task);

        // borrar por id
        bool RemoveByIdTask(int id);

        //List<Task> FindByProjectId(int id);
        //List<Task> FindByDepartmentId(int id);
        //List<Task> FindByUserId(int id);
}

