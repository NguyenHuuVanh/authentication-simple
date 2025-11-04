import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

// UserSchema.pre("save", async function (next) {
//   try {
//     if (this.isModified("password")) {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const User = mongoose.model("User", UserSchema);

export default User;
