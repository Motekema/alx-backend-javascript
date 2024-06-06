/**
 * Adds two numbers after rounding them to the nearest integer.
 *
 * The function takes two arguments, rounds each to the nearest integer
 * using the built-in Math.round() method, and then returns the sum of these
 * rounded values.
 *
 * @param {number} a - The first number to round and add.
 * @param {number} b - The second number to round and add.
 * @returns {number} The sum of the rounded numbers.
 */
const calculateNumber = (a, b) => Math.round(a) + Math.round(b);

module.exports = calculateNumber;

