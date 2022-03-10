import express from "express";
import {registerUser, authUser, updateUserProfile} from "../controller/userController.js";
import { protect } from "../middlewares/authMidleware.js";

const  router = express.Router();
 
router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);


export default router;  