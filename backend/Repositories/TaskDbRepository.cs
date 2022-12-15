using Task = backend.Models.Task;

namespace backend.Repositories
{
    public class TaskDbRepository : ITaskRepository
    {
        //atributos
        private AppDbContext Context;

        //constructores
        public TaskDbRepository(AppDbContext context)
        {
            Context = context;
        }

        // metodos

        public Task CreateTask(Task task)
        {
            if (task.Id > 0)
            {
                return UpdateTask(task);
            }
            Context.Tasks.Add(task);
            Context.SaveChanges();

            return task;
        }

        public Task FindByIdTask(int id)
        {
            return Context.Tasks.Find(id);
        }

        public List<Task> FindAll()
        {
            return Context.Tasks.ToList();
        }

        public bool RemoveByIdTask(int id)
        {
            Task task = FindByIdTask(id);

            if (task == null)
            {
                return false;
            }
            Context.Tasks.Remove(task);
            Context.SaveChanges();

            return true;
        }

        public Task UpdateTask(Task task)
        {
            if (task.Id == 0)
            {
                return CreateTask(task);
            }

            Task taskrepo = FindByIdTask(task.Id);
            taskrepo.Name = task.Name;
            taskrepo.Date = task.Date;
            taskrepo.Status = task.Status;
            taskrepo.Importance = task.Importance;

            Context.Tasks.Update(taskrepo);
            Context.SaveChanges();

            return taskrepo;
        
        }

        public List<Task> FindByProjectId(int id)
        {
            return Context.Tasks
               .Where(project => project.ProjectId == id)
               .ToList();
        }
        public List<Task> FindByUserId(int id)
        {
            return Context.Tasks
               .Where(task => task.UserId == id)
               .ToList();
        }
        public List<Task> FindByDepartmentId(int id)
        {
            return Context.Tasks
               .Where(task => task.DepartmentId == id)
               .ToList();
        }

    }
}
