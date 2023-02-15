const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      favorite: {
        type: Boolean,
        default: false,
      }, 
      owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
      }
}, {
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: false,
    }
})

const ContactModal = mongoose.model('contacts', contactSchema);

module.exports = {
    ContactModal,
}