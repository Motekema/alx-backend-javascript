// Importing necessary modules and dependencies
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

// Test suite for sendPaymentRequestToApi function
describe('sendPaymentRequestToApi', () => {
  // Test case for ensuring sendPaymentRequestToApi function logs the correct total
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    // Spy on the console.log method
    const bigBrother = sinon.spy(console);
    // Stub the calculateNumber method from Utils module
    const dummy = sinon.stub(Utils, 'calculateNumber');

    // Set the return value of calculateNumber stub
    dummy.returns(10);
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions
    // Check if calculateNumber was called with the correct arguments
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    // Check the number of times calculateNumber was called
    expect(dummy.callCount).to.be.equal(1);
    // Check if console.log was called with the correct message
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    // Check the number of times console.log was called
    expect(bigBrother.log.callCount).to.be.equal(1);

    // Restore the stubs to their original behavior
    dummy.restore();
    bigBrother.log.restore();
  });
});
