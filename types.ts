export type User = { username: string; password: string };

type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';

  
export  type Handler = (req: Request, res: Response) => any;


export type Route = {
  method: Method;
  path: string;
  middleware: any[];
  handler: any;
};