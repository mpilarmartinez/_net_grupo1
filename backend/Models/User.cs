namespace backend.Models
{
    public class User
    {
        [Key, Column("id")]
        public int Id { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("contrasenya")]
        public string? Contrasenya { get; set; }

        [Column("email")]
        public string Email { get; set; }

        [Column("permissions")]
        public string? Permissions { get; set; }

        public User() { }

        public override string ToString()
        {
            return $"User:{Id}, Name: {Name}, Password: {Contrasenya}, Email: {Email}, Permissions: {Permissions}";
        }
    }
}
