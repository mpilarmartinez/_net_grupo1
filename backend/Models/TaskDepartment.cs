namespace backend.Models;

//nombre de la tabla
[Table("taskdepartment")]

public class TaskDepartment
{
    // atributos
    [Key, Column("ID_DEPARTMENT", Order = 0)]
    public int IdDepartment { get; set; }

    [Column("NAME_DEPARTMENT", TypeName = "varchar(75)", Order = 2)]
    public string NameDepartment { get; set; }

    //Asociasion Many to One un autor asocia a mas de un libro "TablaId" = Autor columna id
    //public Autor Autor { get; set; }
    //public int AutorId { get; set; }

    // ToString
    /*public override string ToString()
    {
        return $"TaskDepartment: {Id}, NameDepartment:{NameDepartment}";
    }*/
}
