namespace backend.Db
{
    public class AppDbContext
    {
        internal object Tasks;

        public DbSet<User> Users { get; set; }

        public DbSet<TaskDepartment> Tasks { get; set; }
    }
}
