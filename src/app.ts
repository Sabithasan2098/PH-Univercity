import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentsRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/users/users.routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
const app: Application = express();

// perser
app.use(express.json());

app.use(cors());

app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

export default app;
