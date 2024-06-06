/**
 * Function that performs a mathematical operation on two numbers after rounding them.
 * @param {string} type - The type of operation to perform ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or 'Error' if division by zero.
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    // Rounds both numbers and returns their sum
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    // Rounds both numbers and returns their difference
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    // Rounds both numbers and returns their quotient or 'Error' if division by zero
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  // Returns 0 if the type is not recognized
  return 0;
};

module.exports = calculateNumber;
