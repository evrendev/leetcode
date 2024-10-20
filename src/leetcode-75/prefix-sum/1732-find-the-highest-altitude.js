/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
  const altitudes = [0];

  gain.forEach((g) => {
    altitudes.push(altitudes[altitudes.length - 1] + g);
  });

  return Math.max(...altitudes);
};

export default largestAltitude;
