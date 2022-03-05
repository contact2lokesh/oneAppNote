import express from "express";
import {registerUser, authUser} from "../controller/userController.js";

const  router = express.Router();
 
router.route("/").post(registerUser);
router.route("/login").post(authUser);

export default router;