export interface Project {  //Typescript. Debe coincidir con json 
  id: number;
  name: string;
  status: string;

  //asociaciones
  tasks?: any[];
}
