/**Event Loop Example */

console.log("Synchronous 1");

setTimeout(() => {
   console.log("Synchronous 2");
    
}, 0);

Promise.resolve().then( () => console.log('Synchronous 3'));

console.log('Synchronous 4');
