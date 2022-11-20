using backend.Repositories;

namespace backend.Controllers;

// [EnableCors("AllowAll")]
[ApiController]
[Route("api/taskDepartments")]
public class TaskDepartmentController
{
    // atributos
    private ITaskDepartmentRepository TaskDepartmentRepo;

    // constructores
    public TaskDepartmentController(ITaskDepartmentRepository taskDepartmentRepository)
    {
        TaskDepartmentRepo = taskDepartmentRepository;
    }
    
    // métodos

    // este metodo funciona
    [HttpPost] // POST api/taskDepartments
    public TaskDepartment CreateDepartment(TaskDepartment taskDepartment)
    {
        var TaskDepartmentDB = TaskDepartmentRepo.CreateDepartment(taskDepartment);
        return TaskDepartmentDB;
    }

    //metodos que funcionan
    [HttpPut] // POST api/taskDepartments
    public TaskDepartment UpdateDepartment(TaskDepartment taskDepartment)
    {
        return TaskDepartmentRepo.UpdateDepartment(taskDepartment);
    }

    //este metodo funciona
    [HttpGet] // GET api/taskDepartments
    public List<TaskDepartment> FindAllDepartment()
    {
        return TaskDepartmentRepo.FindAllDepartment();
    }

    //este metodo funciona
    [HttpGet("{id}")] // GET api/taskDepartments/3
    public TaskDepartment FindByIdDepartment(int id)
    {
        return TaskDepartmentRepo.FindByIdDepartment(id);
    }

    //este metodo funciona
    [HttpDelete("{id}")]
    public void DeleteById(int id)
    {
        TaskDepartmentRepo.RemoveByIdDepartment(id);
    }
}
