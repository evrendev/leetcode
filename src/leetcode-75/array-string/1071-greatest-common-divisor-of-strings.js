/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  const englishUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  if (
    arr1.length < 1 ||
    arr2.length > 1000 ||
    arr1.find((el) => !englishUppercaseLetters.includes(el)) ||
    arr2.find((el) => !englishUppercaseLetters.includes(el))
  ) {
    throw new Error("Invalid input");
  }

  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  let gcdLength = gcd(str1.length, str2.length);

  const response = str1.slice(0, gcdLength);

  return response;
};

export default gcdOfStrings;
