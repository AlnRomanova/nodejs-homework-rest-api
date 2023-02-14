const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Set name for contact'],
        trim: true,
      },
        password: {
          type: String,
          required: [true, 'Set password for user'],
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
        }, {
          versionKey: false,
          timestamps: {
              createdAt: true,
              updatedAt: false,
          }
})

const UserModal = mongoose.model('users', userSchema);

module.exports = {
    UserModal,
}