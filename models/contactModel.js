const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);
var Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
