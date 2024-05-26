import express from "express";
import { studentControllers } from "./student.controller";

const router = express.Router();

// will call controller function
router.get("/get-all-students", studentControllers.getAllStudent);
router.get("/:studentId", studentControllers.getAStudent);
router.delete("/:studentId", studentControllers.deleteAStudent);

export const studentsRoutes = router;
