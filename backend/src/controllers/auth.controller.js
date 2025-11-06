import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.createUser(username, password);

    return res.json({
      status: 201,
      message: "User created successfully",
      data: {
        userId: result.userId,
        username: result.username,
        token: result.token,
        refreshToken: result.refreshToken,
      },
    });
  } catch (error) {
    if (error.message === "Username already exists") {
      return res.json({
        status: 409,
        message: error.message,
      });
    }
    return res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.authenticateUser(username, password);

    return res.json({
      status: 200,
      message: "User signed in successfully",
      data: {
        user: {
          id: result._id,
          username: result.username,
          token: result.token,
          refreshToken: result.refreshToken,
        },
      },
    });
  } catch (error) {
    if (error.message === "Invalid username or password") {
      return res.json({
        status: 401,
        message: error.message,
      });
    }

    return res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.json({
        status: 400,
        message: "Refresh token is required",
      });
    }

    const result = await authService.refreshAccessToken(refreshToken);

    return res.json({
      status: 200,
      message: "Access token refreshed successfully",
      data: {
        token: result.token,
      },
    });
  } catch (error) {
    if (error.message === "Invalid refresh token") {
      return res.json({
        status: 401,
        message: error.message,
      });
    }

    return res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const signout = async (req, res) => {
  return res.json({
    status: 200,
    message: "User signed out successfully",
  });
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await authService.getUserProfile(userId);

    return res.json({
      status: 200,
      message: "User profile fetched successfully",
      data: {
        id: user._id,
        username: user.username,
        createAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    if (error.message === "User not found") {
      return res.json({
        status: 404,
        message: error.message,
      });
    }

    return res.json({
      status: 500,
      message: "Internal server error",
    });
  }
};
