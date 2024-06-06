const Utils = require('./utils');

/**
 * Calculates the total payment amount and logs the result.
 *
 * @param {number} totalAmount - The total amount for the payment.
 * @param {number} totalShipping - The total shipping cost.
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;

