// Importing the express module
const express = require('express');

// Creating an Express application
const app = express();
const PORT = 7865; // Defining the port number

// Middleware to parse JSON bodies
app.use(express.json());

/**
 * GET endpoint for the root URL ('/')
 * Sends a welcome message for the payment system
 */
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

/**
 * GET endpoint for the cart URL with a dynamic ID parameter
 * Only matches if the ID is a number
 * Sends a message with the payment methods for the specified cart ID
 */
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extracting the cart ID from the request parameters

  res.send(`Payment methods for cart ${id}`);
});

/**
 * GET endpoint for available payments
 * Sends a JSON object with the available payment methods
 */
app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

/**
 * POST endpoint for user login
 * Expects a JSON body with a userName property
 * Sends a welcome message including the provided username
 */
app.post('/login', (req, res) => {
  let username = '';

  // Extracting the username from the request body if it exists
  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

// Starting the server and listening on the defined port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Exporting the Express application for use in other modules or for testing
module.exports = app;
