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


    [Column("Status")]
    public string Status { get; set; }


    [Column("Importance")]
    public string Importance { get; set; }


    // asociaciones 
    
    public Project? Project { get; set; }                        //ManyToOne 
    public int? ProjectId { get; set; }

    public TaskDepartment? TaskDepartment { get; set; }           //ManyToOne 
                          
    public int? TaskDepartmentId { get; set; }

    public User? User { get; set; }                        //ManyToOne 
                                                                               
    public int? UserId { get; set; }

    // constructores
    public Task() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Task: {Id}, Name:{Name}, Date:{Date}, Status: {Status}, Importance: {Importance},"; 
    }
}


