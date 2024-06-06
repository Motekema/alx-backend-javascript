/**
 * Utility object containing mathematical operations.
 */
const Utils = {
  /**
   * Perform a mathematical operation on two numbers after rounding them.
   *
   * @param {string} type - The type of operation to perform ('SUM', 'SUBTRACT', 'DIVIDE').
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number|string} - The result of the operation, or 'Error' if division by zero occurs.
   */
  calculateNumber(type, a, b) {
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
  },
};

module.exports = Utils;
