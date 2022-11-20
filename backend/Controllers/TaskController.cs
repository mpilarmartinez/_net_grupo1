using backend.Repositories;
using Task = backend.Models.Task;

namespace backend.Controllers;

[ApiController]
[Route("api/tasks")]
public class TaskController
{
    // atributos
    private ITaskRepository TaskRepo;

    // constructores
    public TaskController(ITaskRepository taskRepository)
    {
        TaskRepo = taskRepository;
    }

    // métodos
  
    [HttpGet("FindAll")] // GET api/tasks
    public List<Task> FindAll()
    {
        return TaskRepo.FindAll();
    }

    
    [HttpGet("Find{id}")] // GET api/tasks
    public Task FindByIdTask(int id)
    {
        return TaskRepo.FindByIdTask(id);
    }

    [HttpPost("Create")] // POST api/tasks
    public Task CreateTask(Task task)
    {
        var TaskDB = TaskRepo.CreateTask(task);
        return TaskDB;
    }

    [HttpPut("Update")] // PUT api/tasks
    public Task UpdateTask(Task task)
    {
        return TaskRepo.UpdateTask(task);
    }

    
    [HttpDelete("Remove{id}")] //Delete api/tasks
    public void RemoveByIdTask(int id)
    {
        TaskRepo.RemoveByIdTask(id);
    }
}
