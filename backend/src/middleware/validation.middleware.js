import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const validateSignup = (req, res, next) => {
  const { username, password } = req.body;
  if (!username.trim() || !password.trim()) {
    return res.json({
      status: 400,
      message: "Username and password cannot be empty",
    });
  }

  if (!/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username)) {
    return res.json({
      status: 400,
      message: "Invalid username format",
    });
  }

  if (password.length < 8) {
    return res.json({
      status: 400,
      message: "Password must be at least 8 characters long",
    });
  } else if (!/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)) {
    return res.json({
      status: 400,
      message: "Password must be 8-32 characters long and include both letters and numbers",
    });
  }
  next();
};

export const validateSignin = (req, res, next) => {
  const { username, password } = req.body;

  if (!username.trim() || !password.trim()) {
    return res.json({
      status: 400,
      message: "Username and password cannot be empty!",
    });
  }

  if (!/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username)) {
    return res.json({
      status: 400,
      message: "Invalid username format",
    });
  }

  if (!/^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password)) {
    return res.json({
      status: 400,
      message: "Password must be 8-32 characters long and include both letters and numbers",
    });
  }

  next();
};

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({
      status: 401,
      message: "Access token is required",
    });
  }

  const token = authHeader.split(" ")[1];

  console.log("verifyToken - found token from:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // gắn thông tin user vào req để controller sử dụng
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.json({
        status: 401,
        message: "Access token has expired",
      });
    }

    return res.json({
      status: 401,
      message: "Invalid access token",
    });
  }
};
