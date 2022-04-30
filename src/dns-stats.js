const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {} ;
  if ( domains.length === 0 ) return result ;
  let arr = [] ;
  let arr1 = [] ;
  for ( let i = 0 ; i < domains.length ; i++ ) {
    let x = domains[i].split('.') ;
    for ( let j = 0 ; j < x.length ; j++ ) {
      arr1.push('.' + x[j])
    }
    arr1.reverse() ;
    arr.push(arr1) ;
    arr1 = [] ;
  }
  arr.forEach(arr => arr.reduce((item1, item2) => {
      if (result[item1 + item2]) {
        result[item1 + item2] = result[item1 + item2] + 1 ;
        return item1 + item2 ;
      }
      result[item1 + item2] = 1 ;
      return item1 + item2 ;
  }, ""))
  return result ;
}
module.exports = {
  getDNSStats
};
