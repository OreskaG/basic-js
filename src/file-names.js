const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let result = [] ;
  if ( !names.length ) { return names } ;
  result.push(names[0]) ;
  for ( let i = 1 ; i < names.length ; i++ ) {
    let count = 0 ;
    for ( let k = 0 ; k < result.length ; k++) {
      if ( names[i] == names[k] || names[i] == result[k]) {
          count++ ;
      }
    }
    for ( let j = 0 ; j < i ; j++) {
      if ( j == i - 1 ) {
        if ( count == 0 ) {
          result.push(names[i]) ;
          break ;
        }
        str = names[i] + `(${count})` ;
        result.push(str) ;
      }
    }
  }
  return result
}

module.exports = {
  renameFiles
};
