import User from "../models/userSchema.js";
import expressAsyncHandler from "express-async-handler";
import generateTokens from "../utils/generateToke.js";
// register  
const registerUser = expressAsyncHandler(async(req, res)=>{
    const {name, email, password} = req.body;

    const userExsits = await User.findOne({email});

    if(userExsits){
        res.status(400);
        throw new Error("User Already Exsists");
    }
    
    const NewUser = await User.create({
        name, email, password,
    });

    if(NewUser){
        res.status(201).json({
            _id: NewUser._id,
            name: NewUser.name,
            email: NewUser.email,
            token: generateTokens(NewUser._id),
       })
    } else{
        res.status(400);
        throw new Error("Error Occured");
    }
     
});

//login//
const authUser = expressAsyncHandler(async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateTokens(user._id),
        });
    } else{
         res.status(400);
        throw new Error("Invalid Email or Password!");
    }
     
});

const updateUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
  
      const updatedUser = await user.save();
  
      res.json({ 
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        token: generateTokens(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
  });

export  {registerUser, authUser, updateUserProfile}; 