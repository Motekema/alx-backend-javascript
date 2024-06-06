// Importing the express module
const express = require('express');

// Creating an Express application
const app = express();
const PORT = 7865; // Defining the port number

/**
 * GET endpoint for the root URL ('/')
 * Sends a welcome message for the payment system
 */
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Starting the server and listening on the defined port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Exporting the Express application for use in other modules or for testing
module.exports = app;

