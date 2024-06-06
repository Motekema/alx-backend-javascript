const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('should return the sum of numbers that round to equal positive numbers', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('should return the sum of equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('should return the sum of numbers that round to equal negative numbers', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('should return the sum of a negative and a positive number that cancel each other out', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('should return the sum of a positive and a negative number that cancel each other out', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('should return the sum of two zero values', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return the difference of equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('should return the difference of numbers that round to equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('should return the difference of equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('should return the difference of numbers that round to equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('should return the difference of a negative and a positive number', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('should return the difference of a positive and a negative number', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('should return the difference of two zero values', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return the quotient of positive numbers', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('should return the quotient of a negative and a positive number', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('should return the quotient of a positive and a negative number', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('should return the quotient of negative numbers', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('should return the quotient of equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('should return the quotient of equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('should return the quotient of numbers rounding up', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('should return the quotient of numbers rounding down', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('should return 0 when dividing 0 by a positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('should return -0 when dividing 0 by a negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('should return "Error" when dividing a positive number by 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number that rounds down to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a positive number by a number that rounds up to 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by 0', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number that rounds down to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing a negative number by a number that rounds up to zero', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('should return "Error" when dividing 0 by 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
