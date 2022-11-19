namespace backend.Repositories;

public class TaskDepartmentDbRepository : ITaskDepartmentRepository
{
    //atributos
    private AppDbContext Context;

    //constructores
    public TaskDepartmentDbRepository(AppDbContext context)
    {
        Context = context;
    }

    //metodos

    //Guardar nuevo
    public TaskDepartment CreateDepartment(TaskDepartment taskDepartment)
    {
        //return taskDepartment;
        //si tiene id es update y no se crea
        if (taskDepartment.IdDepartment > 0) // 1
            return UpdateDepartment(taskDepartment);
        Context.TaskDepartments.Add(taskDepartment);
        Context.SaveChanges();
        return taskDepartment;
    }

    //Actualizar TaskDepartmen existente
    public TaskDepartment UpdateDepartment(TaskDepartment taskDepartment)
    {
        //return taskDepartment;
        
        if (taskDepartment.IdDepartment == 0)
            return CreateDepartment(taskDepartment);

        // guardar solo aquellos atributos que interesen
        Context.TaskDepartments.Attach(taskDepartment);

        Context.Entry(taskDepartment).Property(b => b.NameDepartment).IsModified = true;


        Context.SaveChanges();

        Context.TaskDepartments.Update(taskDepartment);
        Context.SaveChanges();

        return taskDepartment;
        
    }

    public List<TaskDepartment> FindAllDepartment()
    {
        return Context.TaskDepartments.ToList();
    }

    //Buscar por id
    public TaskDepartment FindByIdDepartment(int id)
    {
        return Context.TaskDepartments.Find(id);
    }

    //Eliminar por id
    public bool RemoveByIdDepartment(int id)
    {

        TaskDepartment taskDepartment = FindByIdDepartment(id);
        if (taskDepartment == null)
            return false;

        Context.TaskDepartments.Remove(taskDepartment);

        Context.SaveChanges();
        return true;
    }
}
