/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(" ").reverse().join(" ").trim().replace(/\s+/g, " ");
};

export default reverseWords;
