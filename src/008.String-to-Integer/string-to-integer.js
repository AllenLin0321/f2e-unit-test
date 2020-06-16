/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const firstStrCode = str.trim().charCodeAt(0);
  if (firstStrCode >= 48 && firstStrCode < 57) {
    const strArr = str.split(" ");
    return +strArr[0];
  } else if (firstStrCode === 45) {
    return +str;
  }
  return 0;
};
export default myAtoi;
