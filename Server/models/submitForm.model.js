const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submitFormSchema = new Schema({
  // CODE HERE
  qa: [{
    question: {
      type: String,
    },
  
    answer: {
      type: String,
    },
  }]
});

module.exports.Student = mongoose.model("Student", submitFormSchema);