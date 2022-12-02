using backend.Repositories;

namespace backend.Controllers;

// [EnableCors("AllowAll")]
[ApiController]
[Route("api/departments")]
public class DepartmentController
{
    // atributos
    private IDepartmentRepository DepartmentRepo;

    // constructores
    public DepartmentController(IDepartmentRepository departmentRepository)
    {
        DepartmentRepo = departmentRepository;
    }
    
    // métodos

    // este metodo funciona
    [HttpPost] // POST api/taskDepartments
    public Department CreateDepartment(Department department)
    {
        var DepartmentDB = DepartmentRepo.CreateDepartment(department);
        return DepartmentDB;
    }

    //metodos que funcionan
    [HttpPut] // POST api/taskDepartments
    public Department UpdateDepartment(Department taskDepartment)
    {
        return DepartmentRepo.UpdateDepartment(taskDepartment);
    }

    //este metodo funciona
    [HttpGet] // GET api/taskDepartments
    public List<Department> FindAllDepartment()
    {
        return DepartmentRepo.FindAllDepartment();
    }

    //este metodo funciona
    [HttpGet("{id}")] // GET api/taskDepartments/3
    public Department FindByIdDepartment(int id)
    {
        return DepartmentRepo.FindByIdDepartment(id);
    }

    //este metodo funciona
    [HttpDelete("{id}")]
    public void DeleteById(int id)
    {
        DepartmentRepo.RemoveByIdDepartment(id);
    }
}
