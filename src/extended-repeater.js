import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater( str, options ) {       
  options.repeatTimes == undefined ? options.repeatTimes = 1 : true;
 options.additionRepeatTimes == undefined ? options.additionRepeatTimes = 0 : true;
 options.additionSeparator == undefined ? options.additionSeparator = '|' : true
 options.separator == undefined ? options.separator = '+' : true
 options.addition === null ? options.addition = 'null' : true
 options.addition == undefined ? options.addition = '' : true
 options.addition === true ? options.addition = 'true' : true
 if (typeof options.addition != 'string') {
     toString(options.addition)
 }
 if (typeof str != 'string') {
     toString(str)
 }

 let resStr = '';

 for (let i = 0; i < options.repeatTimes; i++) {
     resStr += str;
     for (let j = 0; j < options.additionRepeatTimes; j++) {
         if (j == options.additionRepeatTimes - 1) {
             resStr += options.addition
         } else {
             resStr += options.addition + options.additionSeparator;
         }

     }
     if (options.additionRepeatTimes == 0) {
         resStr += options.addition;
     }

     if (i == options.repeatTimes - 1) {
         resStr;
     } else {
         resStr += options.separator
     }


 }

 return resStr
 }
