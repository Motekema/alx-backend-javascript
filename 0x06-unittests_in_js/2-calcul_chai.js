/**
 * Performs a specified operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. It can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation. Returns a number for 'SUM' and 'SUBTRACT'.
 * For 'DIVIDE', returns the quotient or 'Error' if the divisor is 0.
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return 0;
};

module.exports = calculateNumber;
