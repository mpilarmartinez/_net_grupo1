export interface Project {  //Typescript. Debe coincidir con json 
  id: number;
  name: string;
  status: string;
  task_project: string;

  //asociaciones OnetoMany
  //tasks?: any[];
}
