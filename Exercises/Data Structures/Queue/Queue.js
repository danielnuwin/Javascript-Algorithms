/**
 * Queue:
 * First in First Out
 * --> Array Implementation
 * 
 * Methods:
 * enqueue():
 * dequeue():
 */

 class Queue {
     constructor(){
         this.queue = [];
     }
     enqueue(val){
        this.queue.push(val);
     }
     dequeue(){
         let returnVal = this.queue[0];
         this.queue.splice(0,1);
         return returnVal;
     }
 }

 const queue = new Queue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 console.log(queue.dequeue());
 console.log(queue.dequeue());
 console.log(queue.dequeue());
 console.log(queue.dequeue());
 
 console.log(queue);
 