import { studentServices } from "./student.service";
import { createHandler } from "../../utils/controllerHandelar";

// This are the refactor code result------------------------------------------------------------------->
// find all student data---------------------------->
const getAllStudent = createHandler(
  () => studentServices.getAllStudentFromDB(),
  "All student data fetched successful!",
);
// ------------------------------------------------//
// find a student data----------------------------->
const getAStudent = createHandler(
  (req: any) => studentServices.getAStudentFromDB(req.params.studentId),
  "Student fetched successfully",
);
// delete a student data--------------------------->
const deleteAStudent = createHandler(
  (req: any) => studentServices.deleteAStudentFromDB(req.params.studentId),
  "Delete student successfully",
);
// ----------------------------------------------//
// ----------------------------------------------------------------------------------------------------//
export const studentControllers = {
  getAllStudent,
  getAStudent,
  deleteAStudent,
};
