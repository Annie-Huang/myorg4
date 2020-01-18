/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {Todo} from '@myorg4/data';

const app = express();

// interface Todo {
//   title: string;
// }

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});
app.get('/api/todos', (req, resp) => resp.send(todos));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
