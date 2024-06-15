import { Router } from "express";
import { studentsRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/users/users.routes";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.routes";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { academicDepartMentRoutes } from "../modules/academicDepertment/academicDepartment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/students",
    route: studentsRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/academic-semester",
    route: academicSemesterRoutes,
  },
  {
    path: "/academic-faculty",
    route: academicFacultyRoutes,
  },
  {
    path: "/academic-departMent",
    route: academicDepartMentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
