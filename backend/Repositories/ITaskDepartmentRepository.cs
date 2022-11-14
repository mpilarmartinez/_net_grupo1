namespace backend.Repositories;

public interface ITaskDepartmentRepository
{
    //Metodos

    //Buscar por id
    TaskDepartment FindByIdDepartment(int id);
    List<TaskDepartment> FindAllDepartment();

    //Guardar nuevo
    TaskDepartment CreateDepartment(TaskDepartment TaskDepartment);

    //Actualizar TaskDepartmen existente
    TaskDepartment UpdateDepartment(TaskDepartment taskDepartment);

    //Eliminar por id
    bool RemoveByIdDepartment(int id);
}
