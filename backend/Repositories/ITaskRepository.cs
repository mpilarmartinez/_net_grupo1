using Task = backend.Models.Task;

namespace backend.Repositories;

    public interface ITaskRepository
    {
        // buscar por id
        Task FindById(int id);

        // buscar  todos
        List<Task> FindAll();

        // buscar por  importancia
        List<Task> FindByImportanceTask(string importancetask);

        // buscar por status
        List<Task> FindByStatus(string statustask);

        // buscar por id incluyendo asociaciones: Project, TaskDepartment
        Task FindByIdWithInclude(int id);

        //Guardar nuevo
        Task CreateTask(Task task);

        //Actualizar Task
        Task UpdateTask(Task task);

        // borrar por id
        bool Remove(int id);

    }

