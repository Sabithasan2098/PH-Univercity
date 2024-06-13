import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validationRequest from "../../middlewares/validateRequest";
import {
  createAcademicSemesterValidation,
  updateAcademicSemesterValidationSchema,
} from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validationRequest(createAcademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);

// get all data------------------------------------------------------------------------------------------->
router.get(
  "/get-all-academic-semester",
  academicSemesterController.getAllAcademicSemesterData,
);
// get data by id----------------------------------------------------------------------------------------->
router.get(
  "/:academicSemesterId",
  academicSemesterController.getAcademicSemesterDataById,
);
// update academicSemester by id-------------------------------------------------------------------------->
router.patch(
  "/:studentId",
  validationRequest(updateAcademicSemesterValidationSchema),
  academicSemesterController.updateAcademicSemester,
);

export const academicSemesterRoutes = router;
