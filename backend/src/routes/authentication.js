import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
const router = express.Router();

// signup route
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username.trim() || !password.trim()) {
      return res.json({
        status: 400,
        message: "Username and password cannot be empty",
      });
    } else if (!/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username)) {
      return res.json({
        status: 400,
        message: "Invalid username format",
      });
    } else if (!/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)) {
      return res.json({
        status: 400,
        message: "Password must be 8-32 characters long and include both letters and numbers",
      });
    } else {
      User.findOne({ username }).then(async (existingUser) => {
        if (existingUser) {
          return res.json({
            status: 400,
            message: "Username already exists",
          });
        }
        const newUser = new User({ username, password });
        const saltRounds = 10;

        await bcrypt
          .hash(newUser.password, saltRounds)
          .then((hashedPassword) => {
            newUser.password = hashedPassword;
          })
          .catch((err) => {
            return res.json({
              status: 500,
              message: "Error hashing password",
            });
          });

        newUser.save().then((result) => {
          return res.json({
            status: 200,
            message: "User registered successfully",
            data: result,
          });
        });
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "Server error",
    });
  }
});

// login route
router.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!username.trim() || !password.trim()) {
    return res.json({
      status: 400,
      message: "Username and password cannot be empty",
    });
  } else if (!/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username)) {
    return res.json({
      status: 400,
      message: "Invalid username format",
    });
  } else if (!/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)) {
    return res.json({
      status: 400,
      message: "Password must be 8-32 characters long and include both letters and numbers",
    });
  }

  User.findOne({ username }).then((existingUser) => {
    if (!existingUser) {
      return res.json({
        status: 400,
        message: "Invalid username or password",
      });
    }

    bcrypt.compare(password, existingUser.password).then((isMatch) => {
      if (!isMatch) {
        return res.json({
          status: 400,
          message: "Invalid username or password",
        });
      }

      return res.json({
        status: 200,
        message: "User logged in successfully",
        data: existingUser,
      });
    });
  });
});

// logout route
router.post("/logout", (req, res) => {
  res.send("User logged out");
});

export default router;
