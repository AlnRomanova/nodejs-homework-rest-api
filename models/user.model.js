const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        passwordHash: {
          type: String,
          required: [true, 'Set password for user'],
          trim: true,
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
          index: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
         token: String,
         avatarURL: String,
         verify: {
          type: Boolean,
          default: false,
        },
        verificationToken: {
          type: String,
          required: [true, 'Verify token is required'],
        },
        }, {
          versionKey: false,
          timestamps: {
              createdAt: true,
              updatedAt: false,
          }
})

const UserModel = mongoose.model('users', userSchema);

module.exports = {
    UserModel,
}