const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("token from auth middleware", token);
    
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedObj =  jwt.verify(token, "bear");
    console.log("decodedObj", decodedObj);
    
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};