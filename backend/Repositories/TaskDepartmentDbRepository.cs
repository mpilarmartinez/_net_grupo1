﻿namespace backend.Repositories;

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
        return taskDepartment;
        //si tiene id es update y no se crea
        /*if (taskDepartment.Id > 0) // 1
            return UpdateDepartment(taskDepartment);
        Context.TaskDepartments.Add(taskDepartment);
        Context.SaveChanges();
        return taskDepartment;*/
    }

    //Actualizar TaskDepartmen existente
    public TaskDepartment UpdateDepartment(TaskDepartment taskDepartment)
    {
        //return taskDepartment;
        
        if (taskDepartment.IdDepartment == 0)
            return CreateDepartment(taskDepartment);

        TaskDepartment taskDepartmentEntity = FindByIdDepartment(taskDepartment.IdDepartment);
        //taskDepartmentEntity.Email = taskDepartment.Email;
        //taskDepartmentEntity.FullName = taskDepartment.FullName;
        //taskDepartmentEntity.Salary = taskDepartment.Salary;

        Context.TaskDepartments.Update(taskDepartmentEntity);

        //Context.SaveChanges();

        return taskDepartmentEntity;
        
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

        //Context.SaveChanges();
        return true;
    }
}