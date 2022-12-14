using Task = backend.Models.Task;

namespace backend.Repositories;

public class DepartmentDbRepository : IDepartmentRepository
{
    //atributos
    private AppDbContext Context;


    //constructores
    public DepartmentDbRepository(AppDbContext context)
    {
        Context = context;
    }

    //metodos

    //Guardar nuevo
    public Department CreateDepartment(Department department)
    {
        //return taskDepartment;
        //si tiene id es update y no se crea
        if (department.Id > 0) // 1
            return UpdateDepartment(department);
        Context.Departments.Add(department);
        Context.SaveChanges();
        return department;
    }

    //Actualizar TaskDepartmen existente
    public Department UpdateDepartment(Department department)
    {
        //return taskDepartment;
        
        if (department.Id == 0)
            return CreateDepartment(department);

        Department departmentDb = FindByIdWithInclude(department.Id);
        if (department == null)
            throw new Exception("Department not found");
        departmentDb.Name = department.Name;
        departmentDb.TaskId = department.TaskId;

        // guardar solo aquellos atributos que interesen
        Context.Departments.Attach(department);

        Context.Entry(department).Property(b => b.Name).IsModified = true;


        Context.SaveChanges();

        Context.Departments.Update(department);
        Context.SaveChanges();

        return department;
        
    }

    public List<Department> FindAllDepartment()
    {
        return Context.Departments.ToList();
    }

    //Buscar por id
    public Department FindByIdDepartment(int id)
    {
        return Context.Departments.Find(id);
    }

    //Eliminar por id
    public bool RemoveByIdDepartment(int id)
    {

        Department department = FindByIdDepartment(id);
        if (department == null)
            return false;

        Context.Departments.Remove(department);

        Context.SaveChanges();
        return true;
    }

    public Department FindByIdWithInclude(int id)
    {
        return Context.Departments
            .Include(department => department.Task)
            .Where(department => department.Id == id)
            .FirstOrDefault();
    }
    //asociacion
    public List<Department> FindByTaskId(int id)
    {
        return Context.Departments
           .Where(department => department.TaskId == id)
           .ToList();
    }
}
