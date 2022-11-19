namespace backend.Models;

//nombre de la tabla
[Table("TaskDepartment")]

public class TaskDepartment
{
    // atributos
    // los nombres de la columna deben palabras enteras sin guiones
    [Key, Column("IdDepartment", Order = 0)]
    public int IdDepartment { get; set; }

    [Column("NameDepartment", TypeName = "varchar(75)", Order = 2)]
    public string NameDepartment { get; set; }

    //Asociasion Many to One un autor asocia a mas de un libro "TablaId" = Autor columna id
    //public Autor Autor { get; set; }
    //public int AutorId { get; set; }

    // ToString
    /*public override string ToString()
    {
        return $"TaskDepartment: {IdDepartment}, NameDepartment:{NameDepartment}";
    }*/
}
