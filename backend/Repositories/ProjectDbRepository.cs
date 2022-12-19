using System.Reflection.Metadata;
namespace backend.Repositories
{
    public class ProjectDbRepository : IProjectRepository
    {

        //atributos
        private AppDbContext Context;
        //private ITaskRepository TaskRepo; //asociacion tareas

        //constructores
        public ProjectDbRepository(AppDbContext context, ITaskRepository taskRepository)
        {
            Context = context;
            //TaskRepo = taskRepository;  //asociacion tareas
        }

        //metodos

        public Project Create(Project project)
        {
            if (project.Id > 0)
            {
                return Update(project);
            }
            //if (project.tasks != null && project.tasks.Count > 0)   //asociacion tareas
                //Context.Tasks.AttachRange(project.tasks);
            
            Context.Projects.Add(project);
            Context.SaveChanges();

            return project;
        }

        public Project FindByID(int id)
        {
            return Context.Projects.Find(id);
        }

        public List<Project> FindAll()
        {
            return Context.Projects.ToList();
        }

        public bool Delete(int id)
        {
            Project project = FindByID(id);

            if (project == null)
            {
                return false;
            }
            Context.Projects.Remove(project);
            Context.SaveChanges();
            return true;
        }

        public Project Update(Project project)
        {
            if (project.Id == 0)
            {
                return Create(project);
            }

            Project projectrepo = FindByID(project.Id);
            projectrepo.Name = project.Name;
            projectrepo.Status = project.Status;
            projectrepo.Task_project = project.Task_project;

            Context.Projects.Update(projectrepo);
            Context.SaveChanges();

            return projectrepo;

        }

        //asociacion
        /*public List<Project> FindByTaskId(int id)
        {
            return Context.Projects
               .Where(project => project.TaskId == id)
               .ToList();
        }

        public List<Project> FindByUserId(int id)
        {
            return Context.Projects
               .Where(project => project.UserId == id)
               .ToList();
        }

        public List<Project> FindByDepartmentId(int id)
        {
            return Context.Projects
               .Where(project => project.DepartmentId == id)
               .ToList();
        }*/
    }
}