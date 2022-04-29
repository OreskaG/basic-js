const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(x) {

  if (!x) { throw new Error('Unable to determine the time of year!') }
  // if ( x == undefined ) { throw new Error('Unable to determine the time of year!') }
  // if ( Date.length > 7 ) { throw new Error('Unable to determine the time of year!') }
  // if ( typeof(x) == 'function' ) { throw new Error('Invalid date!') }
  // if ( typeof(x) !== 'object' ) { throw new Error('Unable to determine the time of year!') }
  
  if ( Object.prototype.toString.call(x) !== '[object Date]' ) { throw new Error('Invalid date!') }

  if ( x.getMonth() === 00 ) return 'winter' ;
  if ( x.getMonth() === 01 ) return 'winter' ;
  if ( x.getMonth() === 11 ) return 'winter' ;
  if ( x.getMonth() === 02 ) return 'spring' ;
  if ( x.getMonth() === 03 ) return 'spring' ;
  if ( x.getMonth() === 04 ) return 'spring' ;
  if ( x.getMonth() === 05 ) return 'summer' ;
  if ( x.getMonth() === 06 ) return 'summer' ;
  if ( x.getMonth() === 07 ) return 'summer' ;
  if ( x.getMonth() === 08 ) return 'autumn' ;
  if ( x.getMonth() === 09 ) return 'autumn' ;
  if ( x.getMonth() === 10 ) return 'autumn' ;
}

module.exports = {
  getSeason
};
