using Task = backend.Models.Task;

namespace backend.Db
{
    public class AppDbContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Project> Projects { get; set; }

        public DbSet<Department> Departments { get; set; }

        public AppDbContext(DbContextOptions options) : base(options){        }

    }
}
