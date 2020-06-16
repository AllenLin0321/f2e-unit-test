const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -1 * 2 ** 31;

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
    if (str.length === 1) return NaN;
    if (+str > INT_MAX) return INT_MAX;
    if (+str < INT_MIN) return INT_MIN;
    return +str;
  }
  return 0;
};
export default myAtoi;
