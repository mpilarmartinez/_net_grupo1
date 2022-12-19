

export interface Task {  //Typescript. Debe coincidir con json
  id: number; 
  name: string; 
  date: string;
  //status?: TaskStatus;
  status?: any;
  //importance: string;
  importance?: any;


  //asociaciones ManyToOne

  project?: any;
  projectId?: number;

  //department?: any;
  //departmentId?: number;

  user?: any;
  userId?: number;
} 

