import JsonWebToken from "jsonwebtoken";
 
const generateTokens = (id)=>{
    return JsonWebToken.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

export default generateTokens;