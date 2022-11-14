namespace backend.Db
{
    public class AppDbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<TaskDepartment> TaskDepartments { get; set; }
    }
}
