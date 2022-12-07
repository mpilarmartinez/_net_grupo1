//tipo de archivo TypeScript. Debe coincidir con el json
export interface Department {
  id: number;
  name: string;

  //asociacion OneToMany
  //tasks?: any[];          Yessid-> ¿¿esta bien??
}
