/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = (grid) => {
  let count = 0;
  const n = grid.length;

  const rowMap = new Map();
  for (let i = 0; i < n; i++) {
    const row = grid[i].join(",");
    rowMap.set(row, (rowMap.get(row) || 0) + 1);
  }

  for (let j = 0; j < n; j++) {
    let col = [];
    for (let i = 0; i < n; i++) {
      col.push(grid[i][j]);
    }
    const colStr = col.join(",");

    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr);
    }
  }

  return count;
};

export { equalPairs };
