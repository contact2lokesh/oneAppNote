import Note from "../models/notesSchema.js";
import expressAsyncHandler from "express-async-handler";

// get all note for particular user
const getAllNotes = expressAsyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

//create note
const CreateNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const note = new Note({ user: req.user._id, title, content, category });

    const createdNote = await note.save();

    res.status(201).json(createdNote);
  }
});

//get single note with help of user id.
const getNoteById = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note Not Found" });
  }
});

//update note by user id
const updateNote = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);
  const { title, content, category } = req.body;
  // checking requesting user is exisiting user or not//
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: "Note Not Found" });
  }
});

//delete note 
const deleteNote = expressAsyncHandler(async(req,res)=>{
    const note = await Note.findById(req.params.id);
    if (note.user.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error("You can't perform this action");
      }
      if(note){
        await note.remove();
        res.json({message: "Note Removed"});
      }  else {
        res.status(404).json({ message: "Note Not Found" });
      }

});

export { getAllNotes, CreateNote, getNoteById, updateNote, deleteNote };
