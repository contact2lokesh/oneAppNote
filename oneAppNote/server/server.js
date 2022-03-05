import express, { request } from "express";
// import notes from "./notes.js";
import dotEnv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from "./middlewares/errormidleware.js";
import cors from 'cors';

const app = express();
dotEnv.config();
connectDB();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
}));
 
// //handle cors error//
// app.use((req, res)=>{
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header("Access-Control-Allow-Headers", 'Origin, X-requested-with, Content-Type, Accept, Authorization ');

//   if(req.method === 'OPTIONS'){
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//     return res.status(200).json({});
//   }
// });
// //

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/users", userRoutes);

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((note) => note._id === req.params.id);
//   console.log(note);
//   res.send(note);
// });
 app.use(notFound);
 app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `server is running successfully on port http://localhost:${PORT}/`
  );
});
