export interface Task {  //Typescript. Debe coincidir con json
  id: number; 
  name: string;
  date: Date;
  status: string;
  importance: string;

  //asociaciones ManyToOne

  project?: any;
  projectId?: number;

  department?: any;
  departmentId?: number;

  user?: any;
  userId?: number;
} 

