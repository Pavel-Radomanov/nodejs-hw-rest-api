const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
// const updateSub = require("./updateSub");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verify,
  resendVerify,
};
