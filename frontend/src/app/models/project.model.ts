export interface Project {  //Typescript. Debe coincidir con json 
  id: number;
  name: string;
  status: string;
  task_project: string;

  //asociaciones OnetoMany
  //tasks?: any[];

  //asociacion ManyToOne
  task?: any;
  taskId?: number;

  user?: any;
  userId: number;

  department?: any;
  departmentId: number;
}
