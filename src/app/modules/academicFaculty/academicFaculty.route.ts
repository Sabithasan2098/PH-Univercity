import express from "express";
import validationRequest from "../../middlewares/validateRequest";
import {
  createAcademicFacultyValidation,
  updateAcademicFacultyValidation,
} from "./academicFaculty.validation";
import {
  createAcademicFaculty,
  getAcademicFacultyDataById,
  getAllAcademicFacultyData,
  updateAcademicFaculty,
} from "./academicFaculty.controller";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validationRequest(createAcademicFacultyValidation),
  createAcademicFaculty,
);

// get all data------------------------------------------------------------------------------------------->
router.get("/get-all-academic-faculty", getAllAcademicFacultyData);
// get data by id----------------------------------------------------------------------------------------->
router.get("/:academicFacultyId", getAcademicFacultyDataById);
// update academicFaculty by id-------------------------------------------------------------------------->
router.patch(
  "/:facultyId",
  validationRequest(updateAcademicFacultyValidation),
  updateAcademicFaculty,
);

export const academicFacultyRoutes = router;
