require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = function (app) {
  app.post("/api/send", (req, res) => {
    console.log('/api/send', req.body)
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "griffinjoshs99@gmail.com",
        pass: "sozarzbbhmizmpko",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const [
      first, last, email
    ] = req.body

    const text = req.body.map(
      ({
        question, answer
      }) => `${question}:
      ${answer}

` 
    ).join('')

    const mailOptions = {
      from: email.answer,
      to: "griffinjoshs99@gmail.com",
      subject: `New Enrolled Student ${first.answer} ${last.answer}`,
      text: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      // console.log(req.body);
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + mailOptions.to);
        // console.log(output);
      }
    });
  });
};
