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

    [HttpGet("FindAll")] // GET api/projects
    public List<Project> FindAll()
    {
        return ProjectRepo.FindAll();
    }

    
    [HttpGet("Find{id}")] // GET api/projects/3
    public Project FindByID(int id)
    {
        return ProjectRepo.FindByID(id);
    }

    [HttpPost("Create")] // POST api/projects
    public Project Create(Project project)
    {
        var ProjectDB = ProjectRepo.Create(project);
        return ProjectDB;
    }

    [HttpPut("Update")] // POST api/projects
    public Project Update(Project project)
    {
        return ProjectRepo.Update(project);
    }

    
    [HttpDelete("Delete{id}")]
    public void Delete(int id)
    {
        ProjectRepo.Delete(id);
    }
}