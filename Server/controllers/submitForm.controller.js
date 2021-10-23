const { Student } = require("../models/submitForm.model");

module.exports = {
  index: (request, response) => {
    response.json({ message: "Backend Server Running" });
  },
  newStudent: (request, response) => {
      console.log("new student", request.body)
    Student.create(request.body)
      .then((newStudent) =>
        response.json({ message: "success", results: newStudent })
      )
      .catch((error) => response.json({ message: "error", results: error }));
  },
};
