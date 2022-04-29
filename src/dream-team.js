const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if ( members == null ) { return false }
  if ( members.isArray ) { return false }
  let topTeam = '' ;
  for ( let i = 0 ; i < members.length ; i++ ) {
    if ( typeof(members[i]) === 'string' ) {
      let str = members[i] ;
      str = str.replace(/\s/g, '') ;
      let char = str.charAt(0);
      topTeam = topTeam.concat(char);
    }
  }
  topTeam = topTeam.toUpperCase();
  topTeam = topTeam.split('').sort().join('');
  return topTeam ;
}

module.exports = {
  createDreamTeam
};
