export interface Task {  //Typescript. Debe coincidir con json
  id: number; 
  name: string;
  date: Date;
  status: string;
  importance: string;

  //asociaciones
  projectId?: number;
  departmentId?: number;
  userId?: number;
}

