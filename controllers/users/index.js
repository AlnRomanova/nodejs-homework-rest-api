const { currentUser } = require("./current");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { updateUserAvatar } = require("./update-user-avatar");

module.exports = {
register, 
login,
logout,
currentUser,
updateUserAvatar,
}
