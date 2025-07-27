export interface IGetProject {
  _id: string;
  name: string;
  estado: string;
  fecha_inicio: string;
  fecha_fin: string;
  client: IClient;
  __v: number;
}

export interface IClient{
  _id: string;
  fullName: string;
}