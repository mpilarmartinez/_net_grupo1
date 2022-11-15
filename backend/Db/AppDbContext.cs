namespace backend.Db
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<TaskDepartment> TaskDepartments { get; set; }



        public AppDbContext(DbContextOptions options) : base(options){        }

    }
}
