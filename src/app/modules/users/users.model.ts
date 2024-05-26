import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";
import config from "../../config";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    changePassword: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// create mongoose hook-------------------------------------------->
// pre save hook || middleware------->
userSchema.pre("save", async function (next) {
  //  hashing password before save into database---->
  this.password = await bcrypt.hash(this.password, Number(config.bcryptSalt));

  next();
});
// post save hook || middleware------>
// don't show the password---------------->
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
// -------------------------------------------------------------//

export const UserModel = model<TUser>("User", userSchema);
