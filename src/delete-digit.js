const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = n.toString(10).split('').map( int => parseInt( int, 10 ) ) ;
  arrAcc = [] ;
  for ( i = 0 ; i < arr.length ; i++ ) {
    let numbers = [] ; 
    let str = '' ;
    for ( j = 0 ; j < arr.length ; j++ ) {
      if ( i == j ) { continue } ;
      numbers.push(String(arr[j])) ;
    }
    for ( k = 0 ; k < numbers.length ; k++ ) {
      str = str + numbers[k]
    }
    arrAcc.push(+str)
  }
  let result = Math.max.apply(null, arrAcc) ;
  return result ;
}

module.exports = {
  deleteDigit
};
