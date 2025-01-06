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
  if (!Array.isArray(members) || members.length === 0 ) {
    return false;
  }

  const nameArr = members.filter(member => typeof member === 'string');

  if (nameArr.length === 0) {
    return false;
  }

  let teamName = '';

  nameArr.forEach((name) => {
    const memberName = name.trim();
    teamName += memberName[0].toUpperCase();
  });

  const result = teamName.split('').sort().join('');

  return result;
}

module.exports = {
  createDreamTeam
};
