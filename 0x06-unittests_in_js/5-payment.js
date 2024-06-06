// Importing the Utils module
const Utils = require('./utils');

/**
 * Sends a payment request to the API with the total cost including amount and shipping.
 * @param {number} totalAmount - The total amount of the items.
 * @param {number} totalShipping - The total shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  // Calculating the total cost using a utility function
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  // Logging the total cost to the console
  console.log(`The total is: ${totalCost}`);
};

// Exporting the function for use in other modules
module.exports = sendPaymentRequestToApi;
