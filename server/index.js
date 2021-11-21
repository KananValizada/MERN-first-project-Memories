import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Kanan");
});

// const CONNECTION_URL =
//   "mongodb+srv://nerbeh:nerbeh123@cluster0.wxra0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
