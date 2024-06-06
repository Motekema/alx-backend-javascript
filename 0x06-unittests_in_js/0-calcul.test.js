const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  // Test when both numbers are whole numbers
  it('should return 3 when adding 1.0 and 2.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  // Test rounding down the second number
  it('should return 3 when rounding down 2.4 to 2 and adding 1.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  // Test rounding down both numbers
  it('should return 3 when rounding down 1.4 and 2.4 to 1 and 2, respectively', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  // Test rounding down the first number
  it('should return 3 when rounding down 1.4 to 1 and adding 2.0', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  // Test rounding up the second number
  it('should return 4 when rounding up 2.5 to 3 and adding 1.0', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  // Test rounding up both numbers
  it('should return 6 when rounding up 2.6 and 2.5 to 3 each', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  // Test rounding up the first number
  it('should return 5 when rounding up 2.6 to 3 and adding 2.0', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  // Test rounding down both numbers with trailing 9's
  it('should return 5 when rounding down 2.499999 and 3.499999 to 2 and 3, respectively', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
