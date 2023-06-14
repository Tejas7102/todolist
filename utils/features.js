import jwt from 'jsonwebtoken';
export const sendCookie = (res,user,message) => {
    const token = jwt.sign({_id:user._id},process.env.JWTTOKEN)
    res.status(201).cookie("token",token,{
        httpOnly:true,
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
        credentials: true
    }).json({
        success:true,
        message:message
    })
}