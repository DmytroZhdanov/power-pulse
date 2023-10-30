/**
 * МІняє першу букву в рядку на UpperCase
 * @param {String} s
 * @returns String
 */
const UpperCase = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

export default UpperCase;
