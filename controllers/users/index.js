const { currentUser } = require("./current");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { repeatVerifyEmail } = require("./repeat-verify-email");
const { updateUserAvatar } = require("./update-user-avatar");
const { verifyEmail } = require("./verify-email");



module.exports = {
register, 
login,
logout,
currentUser,
updateUserAvatar,
verifyEmail,
repeatVerifyEmail,
}
