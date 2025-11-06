import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//create token
export const createToken = (userId, username) => {
  return jwt.sign(
    {
      userId,
      username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

// create refresh token
export const createRefreshToken = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
    }
  );
};
