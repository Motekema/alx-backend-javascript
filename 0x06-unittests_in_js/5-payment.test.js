// Importing necessary modules and dependencies
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  let bigBrother; // Declaring a spy to monitor console.log calls

  // Before each test case, create a spy for console.log if not already created
  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  // After each test case, reset the call history of console.log
  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  // Test case for verifying the correct log message when totalAmount = 100 and totalShipping = 20
  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    // Assertion to check if console.log was called with the correct message
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    // Assertion to check if console.log was called only once
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  // Test case for verifying the correct log message when totalAmount = 10 and totalShipping = 10
  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    // Assertion to check if console.log was called with the correct message
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    // Assertion to check if console.log was called only once
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
