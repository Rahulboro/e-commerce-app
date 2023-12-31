import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectToDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// configure dotenv`
dotenv.config();
// config database
connectToDb();

// rest Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(`dev`)); // for parsing application/json

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest API
app.get("/", (req, res) => {
  res.send({
    message: "Hello ujjal World",
  });
});

// declaring port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${process.env.dev_Mode}mode on port ${PORT}`);
});
