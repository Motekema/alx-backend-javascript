/**
 * Simulates a request to get a payment token from an API.
 * @param {boolean} success - Indicates whether the request to the API is successful or not.
 * @returns {Promise} - A Promise that resolves with the payment token if the request is successful.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  // If the request is successful, resolve the Promise with a mock response
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

// Exporting the function for use in other modules
module.exports = getPaymentTokenFromAPI;
