/**
 * Change first letter of string to UpperCase
 *
 * @param {String} s
 * @returns String
 */
const upperCase = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

export default upperCase;
