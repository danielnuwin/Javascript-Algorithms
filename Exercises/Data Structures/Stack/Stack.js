/**
 * Notes:
 * Stack is last in first out
 * methods:
 * pop() - removes last element and returns it
 * peek() - returns last element
 * push() - adds element to top.
 * 
 * array implementation: 
 * Push elements on to the array. 
 * pop() return last element and remove it by splice
 * peek() - return last element of array. 
 */
class Stack {
    constructor() {
        this.stack = [];
    }
    push(val) {
        this.stack.push(val);
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    pop() {
        let returnVal = this.stack[this.stack.length -1];
        this.stack.splice(this.stack.length - 1, 1);
        return returnVal;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
