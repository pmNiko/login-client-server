import express from "express";
import cors from "cors";
import authRoutes from "./routes";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(authRoutes);

export default app;
