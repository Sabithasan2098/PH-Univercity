import { z } from "zod";

export const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department name must be string ",
      required_error: "Name is required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Department name must be string ",
      required_error: "AcademicFaculty is required",
    }),
  }),
});
export const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic Department name must be string ",
        required_error: "Name is required",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic Department name must be string ",
        required_error: "AcademicFaculty is required",
      })
      .optional(),
  }),
});
