import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
 console.log(Array.isArray(members))

  if(Array.isArray(members)){
    
    let arr = members.filter(item => typeof item === 'string');

    let newarr = arr.map((item) => {      
      return item.trim().slice(0,1).toUpperCase();      
    })

    return newarr.sort().join('');    
  }
  else{
    return false;
  }
}
