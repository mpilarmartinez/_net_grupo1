namespace backend.Repositories
{
    public class ProjectDbRepository : IProjectRepository
    {

        //atributos
        private AppDbContext Context;

        //constructores
        public ProjectDbRepository(AppDbContext context)
        {
            Context = context;
        }

        //metodos

        public Project Create(Project project)
        {
            if (project.Id > 0)
            {
                return Update(project);
            }
            Context.Projects.Add(project);
            Context.SaveChanges();

            return project;
        }

        public Project FindByID(int ID)
        {
            return Context.Projects.Find(ID);
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
           

            Context.Projects.Update(projectrepo);
            Context.SaveChanges();

            return projectrepo;

        }

    }
}