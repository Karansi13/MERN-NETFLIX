import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./utils/database.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"

databaseConnection();

dotenv.config({
  path: ".env",
});

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

// middlewares
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
