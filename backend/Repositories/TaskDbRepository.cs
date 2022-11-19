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

        //metodos

        public Task CreateTask(Task task)
        {
            if (task.IdTask > 0)
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
            if (task.IdTask == 0)
            {
                return CreateTask(task);
            }

            Task taskrepo = FindByIdTask(task.IdTask);
            taskrepo.NameTask = task.NameTask;
            taskrepo.DateTask = task.DateTask;
            taskrepo.StatusTask = task.StatusTask;
            taskrepo.ImportanceTask = task.ImportanceTask;

            Context.Tasks.Update(taskrepo);
            Context.SaveChanges();

            return taskrepo;
        
        }
    }
}
