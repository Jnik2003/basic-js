import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    arr: [], 
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    //String(value) ? this.arr.push(`( ${value} )`) : this.arr.push('()');
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
   if(position > 0 && position < this.arr.length) {
     this.arr.splice(position - 1, 1);
    return this;
     
    }
    else{
      this.arr = [];
       throw new Error(`You can't remove incorrect link!`);
    }
    
  },

  reverseChain() {
     this.arr.reverse();
     return this;
    
  },
  finishChain() {
   let newarr = this.arr.join('~~');
    this.arr = [];
    return newarr;
  }
};
