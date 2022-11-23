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
  
    [HttpGet()] // GET api/tasks
    public List<Task> FindAll()
    {
        return TaskRepo.FindAll();
    }

    
    [HttpGet("{id}")] // GET api/tasks
    public Task FindByIdTask(int id)
    {
        return TaskRepo.FindByIdTask(id);
    }

    [HttpPost()] // POST api/tasks
    public Task CreateTask(Task task)
    {
        var TaskDB = TaskRepo.CreateTask(task);
        return TaskDB;
    }

    [HttpPut()] // PUT api/tasks
    public Task UpdateTask(Task task)
    {
        return TaskRepo.UpdateTask(task);
    }

    
    [HttpDelete("{id}")] //Delete api/tasks
    public void RemoveByIdTask(int id)
    {
        TaskRepo.RemoveByIdTask(id);
    }
}
