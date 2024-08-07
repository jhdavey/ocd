const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");
const path = require("path");

// Initialize instance of express server
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the React app in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// API route for sending email
app.post('/api/sendemail', async (req, res) => {
  const { name, email, phone, zip, car, services, notes } = req.body;
  try {
    const send_to = 'harley@quickeasewash.com';
    const sent_from = email;
    const reply_to = email;
    const subject = 'New Quote Request';
    const message = `
      <h1>Quote Request</h1>
      <h2>${name}</h2>
      <h3>${email}</h3>
      <h3>${phone}</h3>
      <h3>${zip}</h3>
      <p>${car}</p>
      <p>Services requested: ${services}</p>
      <p>Notes: ${notes}</p>
    `;

    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email sent..." });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Catch-all route to send back the index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Listen on PORT
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}...`);
});
