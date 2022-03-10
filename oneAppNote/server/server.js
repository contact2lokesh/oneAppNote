import express, { request } from "express";
import dotEnv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoute from "./routes/noteRoute.js";
import {notFound, errorHandler} from "./middlewares/errormidleware.js";
import cors from 'cors';

const app = express();
dotEnv.config();
connectDB();
app.use(express.json());  // for json data
app.use(cors({
  origin: "http://localhost:3000",
}));
 
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoute);

//
// Error Handling middleware
 app.use(notFound);
 app.use(errorHandler); 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `server is running successfully on port http://localhost:${PORT}/`
  );
});
