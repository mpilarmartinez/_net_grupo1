namespace backend.Models;

//nombre de la tabla
[Table("Project")]

public class Project
{

    // atributos

    [Key, Column("IdProject")]
    public int IdProject { get; set; }


    [Column("NameProject")]
    public string NameProject { get; set; }


    [Column("StatusProject")]
    public string StatusProject { get; set; }


    // asociaciones 
    //public List<Task> tasks { get; set; }   //OneToMany 
    //public User User { get; set; }    //ManyToOne ??

    // constructores
    public Project() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Project: {IdProject}, Name:{NameProject}, StatusProject: {StatusProject},";
    }
}



