/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = (senate) => {
  const n = senate.length;
  const radiantQueue = [];
  const direQueue = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const radiantSenator = radiantQueue.shift();
    const direSenator = direQueue.shift();

    if (radiantSenator < direSenator) {
      radiantQueue.push(radiantSenator + n);
    } else {
      direQueue.push(direSenator + n);
    }
  }

  return radiantQueue.length > 0 ? "Radiant" : "Dire";
};

export { predictPartyVictory };
