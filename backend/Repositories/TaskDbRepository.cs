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

       
    }
}
