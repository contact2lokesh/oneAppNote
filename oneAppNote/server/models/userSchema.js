import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    },
    pic:{
        type:String,
        required: true,
        default:"https://www.clipartmax.com/png/middle/296-2969961_no-image-user-profile-icon.png",
    },
},

{
    timestamps: true,
});
// before saving we are encripting password
userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next();
  }
  const salt =  await bcrypt.genSalt(10);
  this.password  = await bcrypt.hash(this.password, salt);
});

//decrpt password//
userSchema.methods.matchPassword = async function(enterPassword){
   return await bcrypt.compare(enterPassword, this.password);
};
const User = mongoose.model('User', userSchema);
export default User;