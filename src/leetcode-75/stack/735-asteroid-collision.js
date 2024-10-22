/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
  const stack = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0 || stack.length === 0) {
      stack.push(asteroid);
    } else {
      let isDestroyed = false;

      while (stack.length > 0 && stack[stack.length - 1] > 0) {
        const topAsteroid = stack[stack.length - 1];
        const absAsteroid = Math.abs(asteroid);

        if (topAsteroid < absAsteroid) {
          stack.pop();
        } else if (topAsteroid === absAsteroid) {
          stack.pop();
          isDestroyed = true;
          break;
        } else {
          isDestroyed = true;
          break;
        }
      }

      if (!isDestroyed) {
        stack.push(asteroid);
      }
    }
  }

  return stack;
};

export { asteroidCollision };
