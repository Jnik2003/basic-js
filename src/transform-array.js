import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newarr = []; 
   if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                {
                    if (i + 1 < arr.length) {
            newarr.push(arr[i + 1]);
        }
                    break;
                }
             case '--double-prev':
                {
                     if (newarr.length > 0) {
            newarr.push(arr[i - 1]);
        }
                    break;
                }
             case '--discard-next':
                {
                    if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
            i++;
        }
                     i++;
                    break;
                }
            case '--discard-prev':
                {
                    if (newarr.length > 0) {
            newarr.pop();
        }
                    break;
                }
            
            
            default:
                {
                    newarr.push(arr[i]);
                }
        }

    }


//     function fDblN(i) {
//         if (i + 1 < arr.length) {
//             newarr.push(arr[i + 1]);
//         }
//     }

//     function fDisP(i) {

//         if (newarr.length > 0) {
//             newarr.pop();
//         }
//     }

//     function fDblP(i) {

//         if (newarr.length > 0) {
//             newarr.push(arr[i - 1]);
//         }
//     }

//     function fDisN(i) {
//         if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
//             i++;
//         }
// i++
//     }
    return newarr;

  

}