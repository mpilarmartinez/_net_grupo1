namespace backend.Models;

//nombre de la tabla
[Table("Task")]

public class Task
{
    
    // atributos

    [Key, Column("Id")]
    public int Id { get; set; }


    [Column("Name")]
    public string Name { get; set; }


    [Column("Date")]
    public DateTime Date { get; set; }


    /*[Column("Status")]
    public string Status { get; set; }*/

    [Column(TypeName = "varchar(50)")]
    public TaskStatus Status { get; set; }

    [Column(TypeName = "varchar(50)")]
    public TaskImportance Importance { get; set; }

    /*[Column("Importance")]
    public string Importance { get; set; }*/


    // asociaciones 
    
    public Project? Project { get; set; }                        //ManyToOne 
    public int? ProjectId { get; set; }

    public User? User { get; set; }                        //ManyToOne 
    public int? UserId { get; set; }

    public Department? Department { get; set; }           //ManyToOne 
    public int? DepartmentId { get; set; }


    // constructores
    public Task() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Task: {Id}, Name:{Name}, Date:{Date}, Status: {Status}, Importance: {Importance},"; 
    }
}


