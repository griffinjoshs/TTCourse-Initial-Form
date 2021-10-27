const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000;
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config()

// Serve static content for the app from the "public" directory in the application directory.
// (html allower)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true  }))

app.use(express.static(__dirname + '/public'));

  // INDEX HTML
  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "/public/index.html"));
    res.sendFile("/index.html");
});

require("./Server/routes/submitForm.routes")(app)
require("./Server/routes/nodeMailerRoutes")(app)

const connectionString = "mongodb+srv://griff:mets9999@cluster0.sgerx.mongodb.net/ttsecretformulaDb?retryWrites=true&w=majority"

mongoose
  .connect(connectionString || "mongodb://localhost/ttsecretformulaDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected To Database!!"))
  .catch((err) => console.log("error:" + err));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
