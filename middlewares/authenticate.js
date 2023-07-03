const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  try {
    const { authorization = " " } = await req.headers;
    console.log(req.headers);
    const [bearer = "", token = ""] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw HttpError(401, "Not authorized");
    }
    try {
      const { id } = await jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        throw Error("Not authorized");
      }
      req.user = user;
      next();
    } catch (error) {
      throw HttpError(401, error.message);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
