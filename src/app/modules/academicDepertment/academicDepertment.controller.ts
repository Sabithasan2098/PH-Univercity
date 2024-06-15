import { Request } from "express";
import { createHandler } from "../../utils/controllerHandelar";
import {
  createAcademicDepartmentIntoDB,
  getAcademicDepartmentByIdFromDB,
  getAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
} from "./academicDepertment.service";

// post DepartMent data------------------------------------->
export const createAcademicDepartMent = createHandler(
  (req: any) => createAcademicDepartmentIntoDB(req.body),
  "Create academic DepartMent successful!",
);
// ------------------------------------------------------//
// get all DepartMent data---------------------------------->
export const getAllAcademicDepartMentData = createHandler(
  () => getAcademicDepartmentFromDB(),
  "Get all academic DepartMent data successful!",
);
// -----------------------------------------------------//
// get DepartMent data by id------------------------------->
export const getAcademicDepartMentDataById = createHandler(
  (req: any) =>
    getAcademicDepartmentByIdFromDB(req.params.academicDepartMentId),
  "Get academic DepartMent data successful!",
);
// -----------------------------------------------------//
// get DepartMent data by id and update it------------------------------->
const updateAcademicDepartMentDataById = async (req: Request) => {
  const { departMentId } = req.params;
  const payload = req.body;
  const result = await updateAcademicDepartmentIntoDB(departMentId, payload);
  return result;
};

export const updateAcademicDepartMent = createHandler(
  (req: any) => updateAcademicDepartMentDataById(req),
  "Update academic DepartMent data successful!",
);
// -----------------------------------------------------//
