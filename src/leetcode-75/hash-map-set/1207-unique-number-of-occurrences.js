/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const set = [...new Set(arr)];
  const map = new Map();
  let result = true;

  set.forEach((num) => {
    const count = arr.filter((item) => item === num).length;
    const values = Array.from(map.values());
    if (values.includes(count)) result = false;

    map.set(num, count);
  });

  return result;
};

export default uniqueOccurrences;
