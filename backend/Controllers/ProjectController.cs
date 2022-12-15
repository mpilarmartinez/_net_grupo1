using backend.Repositories;

namespace backend.Controllers;

[ApiController]
[Route("api/projects")]
public class ProjectController
{
    // atributos
    private IProjectRepository ProjectRepo;

    // constructores
    public ProjectController(IProjectRepository projectRepository)
    {
        ProjectRepo = projectRepository;
    }

    // métodos

    [HttpGet()] // GET api/projects/
    public List<Project> FindAll()
    {
        return ProjectRepo.FindAll();
    }

    
    [HttpGet("{id}")] // GET api/projects/3
    public Project FindByID(int id)
    {
        return ProjectRepo.FindByID(id);
    }

    [HttpGet("task/{id}")]
    public List<Project> FindByTaskId(int id)
    {
        return ProjectRepo.FindByTaskId(id);
    }

    [HttpGet("user/{id}")]
    public List<Project> FindByUserId(int id)
    {
        return ProjectRepo.FindByUserId(id);
    }

    [HttpGet("department/{id}")]
    public List<Project> FindByDepartmentId(int id)
    {
        return ProjectRepo.FindByDepartmentId(id);
    }

    [HttpPost()] // POST api/projects
    public Project Create(Project project)
    {
        var ProjectDB = ProjectRepo.Create(project);
        return ProjectDB;
    }

    [HttpPut()] // POST api/projects
    public Project Update(Project project)  // en el ProjectDbRepository comprueba que el ID del
                                           //  es mayor que cero, sino es cero lo lleva a Create
    {
        return ProjectRepo.Update(project);
    }

    
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
        ProjectRepo.Delete(id);
    }
}