import express from "express";
import {getAllNotes, CreateNote, getNoteById, updateNote, deleteNote} from "../controller/notesController.js";
import { protect } from "../middlewares/authMidleware.js";


const  router = express.Router();

router.route("/").get(protect, getAllNotes);
router.route("/create").post(protect, CreateNote);
router.route("/:id").get(getNoteById);
router.route("/:id").get(getNoteById).put(protect, updateNote);
router.route("/:id").get(getNoteById).delete(protect, deleteNote);


export default router;