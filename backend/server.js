const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const mailchimpRoutes = require('./routes/mailchimp');
const zohoRoutes = require('./routes/zoho');
const workflowRoutes = require('./routes/workflows');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use('/api/mailchimp', mailchimpRoutes);
app.use('/api/zoho', zohoRoutes);
app.use('/api/workflows', workflowRoutes);

// DB connection
mongoose.connect('mongodb://127.0.0.1:27017/mailzo-sync')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
