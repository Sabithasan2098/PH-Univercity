import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepertmentInterface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  },
);
// pre middleware to check duplicate name------------------------------------------------------------->
academicDepartmentSchema.pre("save", async function (next) {
  const isDepartmentExists = await AcademicDepartmentModel.findOne({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new Error("This department already exists");
  }
  next();
});
// --------------------------------------------------------------------------------------------------//
// when the data is't satay in database then don't update--------------------------------------------->
academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();

  const isDepartmentExists = await AcademicDepartmentModel.findOne({
    query,
  });

  if (!isDepartmentExists) {
    throw new Error("This department does not exists");
  }

  next();
});

// --------------------------------------------------------------------------------------------------//

export const AcademicDepartmentModel = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema,
);
