const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const addressbookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "You forgot to add the Name!",
  },
  address: {
    type: String,
    trim: true,
  },
  number: {
    type: Number,
    required: "Oh Oh Forgot the number!",
  },
});

module.exports = mongoose("AddressBook", addressbookSchema);
