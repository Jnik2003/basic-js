import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
   let obj ={}
  let newarr = [];
  arr.forEach((item, index) => {    
    item == -1 ? obj[index] = item : newarr[index] = item
  })
  
 function compareDecimals(a, b) {
    if (a === b) 
         return 0;

    return a < b ? -1 : 1;
}
  //console.log(newarr.sort(compareDecimals))
  let arrsort = newarr.sort(compareDecimals).filter(item => item != null) 

  for(let key in obj){   
    arrsort.splice(+key, 0 , +obj[key])
  }  
  return arrsort
}
