import jwt from "jsonwebtoken";
import User from "../models/User.js";

import { createRefreshToken, createToken } from "../utils/createToken.js";
import { hashData, compareData } from "../utils/hashData.js";

export const createUser = async (username, password) => {
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await hashData(password);
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  const saveUser = await newUser.save();

  const token = createToken(saveUser._id.toString(), saveUser.username);
  const refreshToken = createRefreshToken(saveUser._id.toString());

  const { password: _, ...userData } = saveUser.toObject();
  return { ...userData, token, refreshToken };
};

export const authenticateUser = async (username, password) => {
  const user = await User.findOne({ username });

  const isPasswordValid = await compareData(password, user?.password || "");

  if (!user || !isPasswordValid) {
    throw new Error("Invalid username or password");
  }

  const token = createToken(user._id.toString(), user.username);
  const refreshToken = createRefreshToken(user._id.toString());

  const { password: _, ...userData } = user.toObject();
  return { ...userData, token, refreshToken };
};

export const refreshAccessToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error("User not found");
    }

    const newToken = createToken(user.userId, user.username);
    return { token: newToken };
  } catch (error) {
    throw new Error("Invalid refresh token");
  }
};

export const getUserProfile = async (userId) => {
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
