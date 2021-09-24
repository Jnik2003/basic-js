import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits( n ) {
  let res = [];
  let arr = n.toString().split('').map(Number)
 
    f(arr)
   return res[0];

  function f(arr){ 
  if(arr.length <= 1){
      return;
    }  
  for(let i = 0; i < arr.length; i++){
    
    //console.log(arr)
    return arr.reduce((accum, item) => {
      let x = accum + item;
      //console.log(x)
      res = x.toString().split('').map(Number)
      //console.log(res)
      if(res.length > 1){
        f(res);
      }
      else{
        return res[0]
      }
  })
  }  
}
}

