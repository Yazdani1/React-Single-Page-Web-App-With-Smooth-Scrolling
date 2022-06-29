const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
// const SendEmail = require("./model/SendEmail");
require("dotenv").config();

// "proxy": "http://localhost:8080"
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

//db connection
// require("./model/db");

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

  if (!name) {
    return res.status(400).json({ error: "Please add your name" });
  }

  if (!email) {
    return res.status(400).json({ error: "Please add your e-mail" });
  }

  if (!servicetype) {
    return res.status(400).json({ error: "Please add what service you need" });
  }

  if (!message) {
    return res.status(400).json({ error: "Please add your message" });
  }

  transporter.sendMail({
    to: "yaz4noor@gmail.com",
    from: "yaz4noor@gmail.com",
    subject: "Contact Message",
    html: `<h1>You have one new E-mail:
        
        <h5>Your Details</h5>
        <ul>
        <li><p>Your Name: ${name}</p></li>
        <li><p>Your E-mail: ${email}</p></li>

        <li><p>Service Type: ${servicetype}</p></li>

        <li><p>Message: ${message}</p></li>

        </ul>
        </h1>`,
  });

  res.json({ name });
});



//to deploy heroku
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT, (req, res) => {
  console.log("Server connected");
});
