const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const sendemailschema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  servicetype: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Emaillist", sendemailschema);
