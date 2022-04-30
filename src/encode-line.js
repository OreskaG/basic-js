const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '' ;
  if ( str == '' ) { return str }
  let arr = str.split('') ;
  for ( let i = 0 ; i < arr.length ; i++ ) {
    let count = 1 ;
    for ( let j = i + 1 ; j < arr.length + 1 ; j++ ) {
      console.log(j)
      if ( arr[i] == arr[j] ) {
        count++ ;
        continue ;
      }
      if ( count == 1 ) {
        result = result + arr[i] ;
        break ;
      }
      result = result + count + arr[i] ;
      break ;
    }
    i = i + count - 1 ;
  }
  return result
}

module.exports = {
  encodeLine
};
