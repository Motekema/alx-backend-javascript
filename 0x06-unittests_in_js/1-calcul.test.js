const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of two positive whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('should return the sum of two numbers that round to whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('should return the sum of two negative whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('should return the sum of two negative numbers that round to whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('should return the sum of a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('should return the sum of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('should return the sum of two zeros', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return the difference of two positive whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('should return the difference of two numbers that round to the same whole number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('should return the difference of two negative whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('should return the difference of two negative numbers that round to the same whole number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('should return the difference when subtracting a positive number from a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('should return the difference when subtracting a negative number from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('should return the difference of two zeros', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return the quotient of two positive whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('should return the quotient of a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('should return the quotient of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('should return the quotient of two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('should return 1 when dividing two equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('should return 1 when dividing two equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('should return 1 when dividing two numbers that round up to the same whole number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('should return 1 when dividing two numbers that round down to the same whole number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 when dividing 0 by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('should return -0 when dividing 0 by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('should return "Error" when dividing a positive number by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('should return "Error" when dividing a positive number by a number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('should return "Error" when dividing a negative number by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('should return "Error" when dividing a negative number by a number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('should return "Error" when dividing 0 by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
