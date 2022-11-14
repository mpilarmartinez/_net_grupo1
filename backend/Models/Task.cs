namespace backend.Models;

//nombre de la tabla
[Table("Task")]

public class Task
{
    internal readonly int id;

    // atributos

    [Key, Column("IdTask")]
    public int IdTask { get; set; }


    [Column("NameTask")]
    public string NameTask { get; set; }


    [Column("DateTask")]
    public DateTime DateTask { get; set; }


    [Column("StatusTask")]
    public string StatusTask { get; set; }


    [Column("ImportanceTask")]
    public string ImportanceTask { get; set; }

    // asociaciones (pte. si get; set; son necesarios)
    
    public List<TaskDepartment> taskdepartments { get; set; }   //OneToMany 
    /*public Project Project { get; set; }  -> Enrique? */       //ManyToOne 

    // constructores
    public Task() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Task: {IdTask}, Name:{NameTask}, Date:{DateTask}, StatusTask: {StatusTask}, ImportanceTask: {ImportanceTask}, Taskdepartment: {taskdepartments}"; //faltaria proyect
    }
}

//--------------------------------------------------------------------------
/*
// atributos
[Required(ErrorMessage = "Campo obligatorio"),
 Column("title"),
 MinLength(5, ErrorMessage = "Debe ser mayor de 5 caracteres"), 
 MaxLength(50, ErrorMessage = "Debe ser menor de 15 caracteres")]
 public string Title { get; set; }
 [Required, 
 Column("isbn"), 
 MaxLength(50, ErrorMessage = "Debe debe ser menor de 50 caracteres")]
 public string Isbn { get; set; }
 // asociación Many To One
 public Author? Author { get; set; } // opcional
 public int? AuthorId { get; set; } // autor opcional
 // asociación Many To Many con Category
 public IList<Category> Categories { get; set; }
*/
