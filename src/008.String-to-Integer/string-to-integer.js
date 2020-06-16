/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const firstStrCode = str.charCodeAt(0);
  if (firstStrCode >= 48 && firstStrCode < 57) {
    return +str;
  } else if (firstStrCode === 45) {
    return +str;
  }
  return 0;
};
export default myAtoi;
