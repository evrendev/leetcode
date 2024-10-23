/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "]") {
      let decodedStr = "";
      let repeatCount = "";

      while (stack[stack.length - 1] !== "[") {
        decodedStr = stack.pop() + decodedStr;
      }

      stack.pop();

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      stack.push(decodedStr.repeat(Number(repeatCount)));
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

export { decodeString };
