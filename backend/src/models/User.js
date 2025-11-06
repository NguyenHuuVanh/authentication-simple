import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
