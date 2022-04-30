const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type) { this.type = type } ;

  encrypt(message, key) {
    if ( !message ) { throw new Error('Incorrect arguments!') }
    if ( !key ) { throw new Error('Incorrect arguments!') }
    message = message.toUpperCase() ;
    key = key.toUpperCase() ;
    let result = '';
    key = key.padEnd( message.length, key ) ;

      for ( let i = 0 , j = 0 ; i < message.length ; i++) {
        if ( message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 ) {
          let char = String.fromCharCode( 65 + (message.charCodeAt(i) + key.charCodeAt(j) - 2 * 65 ) % 26 ) ;
          console.log(char)
          result = result + char ;
          j++ ;
          continue ;
        } 
        result = result + message[i] ; 
      }
    if ( this.type == false ) { result = result.split('').reverse().join('') } ;
    return result ;
} ;

  decrypt(message, key) {
    if ( !message ) { throw new Error('Incorrect arguments!') }
    if ( !key ) { throw new Error('Incorrect arguments!') }
    message = message.toUpperCase() ;
    key = key.toUpperCase() ;
    let result = '';
    key = key.padEnd( message.length, key ) ;

      for ( let i = 0 , j = 0 ; i < message.length ; i++) {
        if ( message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 ) {
          let char = String.fromCharCode( 65 + (message.charCodeAt(i) - key.charCodeAt(j) + 26 ) % 26 ) ;
          console.log(char)
          result = result + char ;
          j++ ;
          continue ;
        } 
        result = result + message[i] ; 
      }
    if ( this.type == false ) { result = result.split('').reverse().join('') } ;
    return result ;
  }
}

module.exports = {
  VigenereCipheringMachine
};
