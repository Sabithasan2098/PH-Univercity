import express from "express";
import validationRequest from "../../middlewares/validateRequest";
import {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
} from "./academicDepertment.validation";
import {
  createAcademicDepartMent,
  getAcademicDepartMentDataById,
  getAllAcademicDepartMentData,
  updateAcademicDepartMent,
} from "./academicDepertment.controller";

const router = express.Router();

router.post(
  "/create-academic-departMent",
  validationRequest(createAcademicDepartmentValidation),
  createAcademicDepartMent,
);

// get all data------------------------------------------------------------------------------------------->
router.get("/get-all-academic-departMent", getAllAcademicDepartMentData);
// get data by id----------------------------------------------------------------------------------------->
router.get("/:academicDepartMentId", getAcademicDepartMentDataById);
// update academicDepartMent by id-------------------------------------------------------------------------->
router.patch(
  "/:departMentId",
  validationRequest(updateAcademicDepartmentValidation),
  updateAcademicDepartMent,
);

export const academicDepartMentRoutes = router;
