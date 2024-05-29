import express from "express";
import { createStudent } from "./users.controller";
import studentValidationSchemaZodOnCreate from "../student/student.validation";
import validationRequest from "../../middlewares/validateRequest";

const router = express.Router();

// will call controller function
router.post(
  "/create-student",
  //   sending the zod validation schema to validate request & it's came from studentValidation.ts
  validationRequest(studentValidationSchemaZodOnCreate),
  createStudent,
);

export const userRoutes = router;
