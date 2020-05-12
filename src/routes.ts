import { Request, Response } from 'express';
import createUser from './services/createUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    email:'ewertonorg@gmail.com', 
    password:'123456789',
    techs: [
      'Ruby', 
      'Rails', 
      'Javascript',
      {
        title: 'Ruby',
        experience:100
      },
    ]
  });
    
  return response.json({message:'Hello World'});
}