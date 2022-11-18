using Task = backend.Models.Task;

namespace backend.Db
{
    public class AppDbContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<TaskDepartment> TaskDepartments { get; set; }

        public AppDbContext(DbContextOptions options) : base(options){        }

    }
}
