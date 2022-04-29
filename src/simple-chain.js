const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [] ,

  getLength() {
    return this.chain.length ;
  },
  addLink(value) {
    if ( value === undefined ) { this.chain.push(`( )`) ; return chainMaker } ;
    // if ( typeof value == 'function' ) { this.chain.push(`( )`) ; return chainMaker } ;
    this.chain.push(`( ${value} )`) ;
    return chainMaker ;
  },
  removeLink(position) {
    if ( typeof position !== 'number' ) { this.chain = [] ; throw new Error("You can't remove incorrect link!") } ;
    if ( position <= 0 ) { this.chain = [] ; throw new Error("You can't remove incorrect link!") } ;
    if ( position > this.chain.length ) { this.chain = [] ; throw new Error("You can't remove incorrect link!") } ;
    this.chain.splice(position - 1, 1) ;
    return chainMaker ;
  },
  reverseChain() {
    this.chain.reverse() ;
    return chainMaker ;
  },
  finishChain() {
    let result = this.chain.join("~~") ;
    this.chain = [] ;
    return result ;
  }
};

module.exports = {
  chainMaker
};
