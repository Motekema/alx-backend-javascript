// Importing necessary modules and dependencies
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

// Test suite for getPaymentTokenFromAPI function
describe('getPaymentTokenFromAPI', () => {
  // Test case for verifying the response when the API request is successful (success = true)
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    // Call getPaymentTokenFromAPI function with success = true
    getPaymentTokenFromAPI(true)
      // Promise chain to handle the asynchronous response
      .then((res) => {
        // Assertion to check if the response matches the expected response
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        // Call the done() callback to signal the completion of the asynchronous test
        done();
      });
  });
});
