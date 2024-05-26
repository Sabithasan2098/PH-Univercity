import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { studentsRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/users/users.routes";
const app: Application = express();

// perser
app.use(express.json());

app.use(cors());

app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
    error: err,
  });
});

export default app;
