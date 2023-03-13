const jwt = require("jsonwebtoken");
require('dotenv').config()
const sendToken = (user,statusCode,res)=>{
    const token = user.getJWTToken();
const options =  {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // localStorage.setItem('token',token)
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
}
module.exports = sendToken