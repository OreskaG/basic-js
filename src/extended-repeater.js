const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, o) {
  if ( o.separator === undefined ) { o.separator = '+'}
  if ( o.additionSeparator === undefined ) { o.additionSeparator = '|'}
  if ( o.repeatTimes === undefined ) { o.repeatTimes = 1 }
  if ( o.additionRepeatTimes === undefined ) { o.additionRepeatTimes = 1 }
  if ( o.addition === null ) { o.addition = "null" }
  let result ;
  let add1 = [] ;
  let add2 = [] ;
  for ( let i = 1 ; i <= o.additionRepeatTimes ; i++ ) {
    add1.push(o.addition)
  }
  add1 = add1.join(o.additionSeparator)
  str + add1
  for ( let i = 1 ; i <= o.repeatTimes ; i++ ) {
    add2.push(str + add1)
  }
  result = add2.join(o.separator)
  return result
}

module.exports = {
  repeater
};
