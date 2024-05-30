import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { Code, Month, Name } from "./academicSemester.const";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: Name,
      required: [true, "Name is required"],
    },
    code: {
      type: String,
      enum: Code,
      required: [true, "Code is required"],
    },
    year: {
      type: String,
    },
    startMonth: {
      type: String,
      enum: Month,
    },
    endMonth: {
      type: String,
      enum: Month,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
