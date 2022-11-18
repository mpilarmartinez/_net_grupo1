namespace backend.Models;

//nombre de la tabla
[Table("Task")]

public class Task
{
    
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


    // asociaciones 
    //public List<TaskDepartment> taskdepartments { get; set; }   //OneToMany 
    //public Project Project { get; set; }                        //ManyToOne 

    // constructores
    public Task() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Task: {IdTask}, Name:{NameTask}, Date:{DateTask}, StatusTask: {StatusTask}, ImportanceTask: {ImportanceTask},"; 
    }
}


