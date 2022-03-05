import User from "../models/userSchema.js";
import expressAsyncHandler from "express-async-handler";
import generateTokens from "../utils/generateToke.js";
// register  
const registerUser = expressAsyncHandler(async(req, res)=>{
    const {name, email, password, pic } = req.body;

    const userExsits = await User.findOne({email});

    if(userExsits){
        res.status(400);
        throw new Error("User Already Exsists");
    }
    
    const NewUser = await User.create({
        name, email, password, pic
    });

    if(NewUser){
        res.status(201).json({
            _id: NewUser._id,
            name: NewUser.name,
            email: NewUser.email,
            isAdmin: NewUser.isAdmin,
            pic: NewUser.pic,
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
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateTokens(user._id),
        });
    } else{
         res.status(400);
        throw new Error("Invalid Email or Password!");
    }
     
});

export  {registerUser, authUser}; 