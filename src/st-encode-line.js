import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
   let arr = [...str]; 
 console.log(arr)
 let count= 1;
 let res = '';
 if(arr.length == 0){
    return res;
 } 
 else{
    for(let i = 0; i < arr.length; i++){   
        if(arr[i+1] == arr[i]){           
            count++;          
        }
        else{
            if(count == 1){
               res += arr[i];                
            }
            else{
                res += count+arr[i]
                count = 1;             
            }          
           
        }           
    
 }
 return res;
 }
 
}