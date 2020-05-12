import express, { request, response } from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', (helloWorld) => {
  return response.json({message: 'Hello World'});
});

app.listen(3333);