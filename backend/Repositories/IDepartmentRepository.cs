using Task = backend.Models.Task;

namespace backend.Repositories;

public interface IDepartmentRepository
{
    //Metodos

    //Buscar por id
    Department FindByIdDepartment(int id);
    List<Department> FindAllDepartment();

    //Guardar nuevo
    Department CreateDepartment(Department department);

    //Actualizar TaskDepartmen existente
    Department UpdateDepartment(Department department);

    //Eliminar por id
    bool RemoveByIdDepartment(int id);
    //asociacion
    //List<Department> FindByTaskId(int id);
    //Department FindByIdWithInclude(int id);
}
