export type TUser = {
  id: string;
  password: string;
  changePassword: boolean;
  role: "student" | "faculty" | "admin";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
  // ----createdAt and updatedAt mongoose by default gives us----  //
};
