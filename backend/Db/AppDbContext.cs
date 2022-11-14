namespace backend.Db
{
    public class AppDbContext
    {
        public DbSet<User> Users { get; set; }
    }
}
