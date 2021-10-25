// contact form + mailchimp add api calls
const nodemailer = require('nodemailer');
const request = require('request');
require('dotenv').config()

module.exports = function (app) {  
  app.post('/api/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>First Name: ${req.body.question}</li>
    <li>Last Name: ${req.body.lastName}</li>
    <li>Email: ${req.body.emailAddress}</li>
    <li>Phone: ${req.body.phoneNumber}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    console.log('req' + req.body)

    // gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD // naturally, replace both with your real credentials or an application-specific password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `${req.body.email}`,
      to: 'griffinjoshs99@gmail.com',
      subject: `${req.body.subject}`,
      text: `${req.body.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        console.log(output);
      }
    });
    
    request(options, (err, response, body) => {
      if (err) {
        console.log(err)
        res.redirect('/fail.html');
      } else {
        if (response.statusCode === 200) {
          res.redirect('/contact')
        } else {
          res.redirect('/fail.html');
        }
      }
    });
  });
}
