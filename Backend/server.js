import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDb from "./config/db.js";
import todoRoutes from "./route/todoRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectDb();
app.use("/api/todos", todoRoutes);
app.get("/", (req, res) => {
  res.send("Todo Api Is Running");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is  running on Port ${PORT}`);
});
