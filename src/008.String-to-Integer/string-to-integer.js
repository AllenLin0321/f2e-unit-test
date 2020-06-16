const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  const firstStrCode = str.trim().charCodeAt(0);
  if (firstStrCode >= 48 && firstStrCode < 57) {
    const strArr = str.split(" ");

    if (+strArr[0] > INT_MAX) return INT_MAX;
    if (+strArr[0] < INT_MIN) return INT_MIN;
    return +strArr[0];
  } else if (firstStrCode === 45) {
    return +str;
  }
  return 0;
};
export default myAtoi;
