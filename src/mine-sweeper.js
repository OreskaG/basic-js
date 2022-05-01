const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [] ;
  matrix.forEach( (row) => result.push( row.concat() ) ) ;
  let x = matrix.length - 1 ;
  let y = matrix[0].length - 1 ;
  for ( let i = 0 ; i < matrix.length ; i++) {
    for ( j = 0 ; j < matrix[i].length ; j++) {
      let count = 0 ;
      if ( i < x && matrix[i+1][j] == true ) { count++ } // нижний
      if ( j < y && matrix[i][j+1] == true ) { count++ } // правый
      if ( i > 0 && matrix[i-1][j] == true ) { count++ } // верхний
      if ( j > 0 && matrix[i][j-1] == true ) { count++ } // левый
      if ( i < x && j < y && matrix[i+1][j+1] == true ) { count++ } // право-низ
      if ( i > 0 && j < y && matrix[i-1][j+1] == true ) { count++ } // право-верх
      if ( i > 0 && j > 0 && matrix[i-1][j-1] == true ) { count++ } // лево-верх
      if ( i < x && j > 0 && matrix[i+1][j-1] == true ) { count++ } // лево-низ
      result[i][j] = count ;
    }
  }
  return result ;
}

module.exports = {
  minesweeper
};
