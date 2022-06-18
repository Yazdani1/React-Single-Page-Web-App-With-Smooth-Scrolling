const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const SendEmail = require("./model/SendEmail");
require("dotenv").config();

// "proxy": "http://localhost:8080"
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

//db connection
require("./model/db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//to send email
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

app.post("/sendemail", (req, res) => {

  const { name, email, servicetype, message } = req.body;

//   const sendemail = new SendEmail({
//     name,
//     email,
//     servicetype,
//     message,
//   });

//   sendemail.save().then((sendEmailData) => {

//     res.json({ sendEmailData });

//   });


  transporter.sendMail({
    to: "yaz4noor@gmail.com",
    from: "yaz4noor@gmail.com",
    subject: "Service needed message",
    html: `<h1>Welcome to this job portal web-site. You have become a member
        
        <h5>Your Details</h5>
        <ul>
        <li><p>Your Name: ${name}</p></li>
        <li><p>Your E-mail: ${email}</p></li>

        <li><p>Service Type: ${servicetype}</p></li>

        <li><p>Message: ${message}</p></li>

        </ul>
        </h1>`,
  });

  res.json({name})

});

app.listen(PORT, (req, res) => {
  console.log("Server connected");
});
