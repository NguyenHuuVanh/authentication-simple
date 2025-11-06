import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/configs/db.js";
import authenticationRoutes from "./src/routes/auth.routes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use("/api/auth", authenticationRoutes);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}!`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
