namespace backend.Models;

//nombre de la tabla
[Table("Department")]

public class Department
{
    // atributos
    // los nombres de la columna deben palabras enteras sin guiones
    [Key, Column("Id", Order = 0)]
    public int Id { get; set; }

    [Column("Name", TypeName = "varchar(75)", Order = 2)]
    public string Name { get; set; }

    public List<Task> tasks { get; set; }
    
    //Asociasion Many to One un autor asocia a mas de un libro "TablaId" = Autor columna id
    //public Autor Autor { get; set; }
    //public int AutorId { get; set; }

    // ToString
    /*public override string ToString()
    {
        return $"TaskDepartment: {Id}, Name:{Name}";
    }*/
}
