// Importing necessary modules and dependencies
const request = require('request');
const { expect } = require('chai');

// Test suite for API integration testing
describe('API integration test', () => {
  const API_URL = 'http://localhost:7865'; // Base URL for the API

  // Test case for verifying the response of the GET / endpoint
  it('GET / returns correct response', (done) => {
    // Making a GET request to the root endpoint
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assertion to check if the status code is 200
      expect(res.statusCode).to.be.equal(200);
      // Assertion to check if the response body is the expected message
      expect(body).to.be.equal('Welcome to the payment system');
      // Signaling the completion of the asynchronous test
      done();
    });
  });

  // Test case for verifying the response of the GET /cart/:id endpoint with a valid ID
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Making a GET request to the /cart/47 endpoint
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      // Assertion to check if the status code is 200
      expect(res.statusCode).to.be.equal(200);
      // Assertion to check if the response body is the expected message
      expect(body).to.be.equal('Payment methods for cart 47');
      // Signaling the completion of the asynchronous test
      done();
    });
  });

  // Test case for verifying the response of the GET /cart/:id endpoint with a negative ID
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Making a GET request to the /cart/-47 endpoint
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      // Assertion to check if the status code is 404
      expect(res.statusCode).to.be.equal(404);
      // Signaling the completion of the asynchronous test
      done();
    });
  });

  // Test case for verifying the response of the GET /cart/:id endpoint with a non-numeric ID
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Making a GET request to the /cart/d200-44a5-9de6 endpoint
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      // Assertion to check if the status code is 404
      expect(res.statusCode).to.be.equal(404);
      // Signaling the completion of the asynchronous test
      done();
    });
  });
});
