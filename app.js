const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server hosted on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.json({ name: "Express Mailer !!" });
});

app.post("/send-mail", (req, res) => {
  // Transporter for mail
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME, // enter the sender email address in .env file
      pass: process.env.EMAIL_PASSWORD, // enter the sender email password in .env file
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
});
