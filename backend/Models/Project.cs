 namespace backend.Models;

//nombre de la tabla
[Table("Project")]

public class Project
{

    // atributos

    [Key, Column("Id")]
    public int Id { get; set; }

    [Column("Name")]
    public string Name { get; set; }

    [Column("Status")]
    public string Status { get; set; }

    /*[Column("Task_project")]
    public string Task_project { get; set; }*/


    // asociaciones 
    public Task? Task { get; set; }  //OneToMany
    public int? TaskId { get; set; }

    public User? User { get; set; }                        //ManyToOne 
    public int? UserId { get; set; }

    public Department? Department { get; set; }           //ManyToOne 
    public int? DepartmentId { get; set; }
    //public ICollection<Task>? tasks { get; set; }   //OneToMany 


    // constructores
    public Project() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Project: {Id}, Name:{Name}, Status: {Status},";
    }
}



