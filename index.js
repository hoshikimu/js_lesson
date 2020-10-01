'use strict';

{ 
  function createColunm(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    
    return column;
  }

  const columns = []
  columns[0] = createColunm(0);
  columns[1] = createColunm(1);
  columns[2] = createColunm(2);
  columns[3] = createColunm(3);
  columns[4] = createColunm(4);
  columns[2][2] = 'FREE';

  const bingo = [];
  for (let row = 0; row < 5; row++) {
    bingo[row] = [];
    for (let col = 0; col < 5; col++) {
      bingo[row][col] = columns[col][row];
    }
  }
  console.table(bingo);
}