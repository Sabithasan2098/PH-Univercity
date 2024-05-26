import express from "express";
import { createStudent } from "./users.controller";

const router = express.Router();

// will call controller function
router.post("/create-student", createStudent);

export const userRoutes = router;
