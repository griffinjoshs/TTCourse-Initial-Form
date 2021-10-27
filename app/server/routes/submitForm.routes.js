const submitFormController = require("../controllers/submitForm.controller");

module.exports = function (app) {
    app.get('/api', submitFormController.index)
    app.post('/api/enroll', submitFormController.newStudent)
}