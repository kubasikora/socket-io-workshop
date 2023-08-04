import express, { Request, Response } from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
