/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

export { removeStars };
