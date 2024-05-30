import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validationRequest from "../../middlewares/validateRequest";
import { createAcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validationRequest(createAcademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);

// will call controller function
// router.get("/get-all-students", studentControllers.getAllStudent);
// router.get("/:studentId", studentControllers.getAStudent);
// router.delete("/:studentId", studentControllers.deleteAStudent);

export const academicSemesterRoutes = router;
