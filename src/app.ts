import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentsRoutes } from './app/modules/student/student.route';
const app: Application = express();

// perser
app.use(express.json());

app.use(cors());

app.use('/api/v1/students', studentsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
