import { Schema, model } from "mongoose";
import { TAcademicSemester, TMonth } from "./academicSemester.interface";
const Month: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: ["Autumn", "Summer", "Fall"],
      required: [true, "Name is required"],
    },
    code: {
      type: String,
      enum: ["01", "02", "03"],
      required: [true, "Code is required"],
    },
    year: {
      type: Date,
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
