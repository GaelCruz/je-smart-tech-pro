// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service here
  auth: {
    user: 'netwirefreelancing@gmail.com', // Replace with your email address
    pass: 'Netdev2023!', // Replace with your email password
  },
});

app.get('/', (req, res) => {
  res.send('Welcome to the contact form server!');
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'netwirefreelancing@gmail.com', // Replace with your email address where you want to receive the emails
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});

const PORT = 5000; // You can use any available port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
