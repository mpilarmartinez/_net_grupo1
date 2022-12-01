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


    // asociaciones 
    public List<Task> tasks { get; set; }   //OneToMany 
    

    // constructores
    public Project() { }

    // metodos


    // método tostring
    public override string ToString()
    {
        return $"Project: {Id}, Name:{Name}, Status: {Status},";
    }
}



