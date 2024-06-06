const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  /**
   * Test to verify that the sendPaymentRequestToApi function uses the calculateNumber method of Utils.
   */
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    // Create a spy for the calculateNumber method of Utils
    const bigBrother = sinon.spy(Utils);

    // Call the sendPaymentRequestToApi function
    sendPaymentRequestToApi(100, 20);

    // Check if the calculateNumber method was called with the correct arguments
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    // Check if the calculateNumber method was called exactly once
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

    // Restore the original calculateNumber method
    bigBrother.calculateNumber.restore();
  });
});
