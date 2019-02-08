//Fibonacci Seq
//the Sum of all the numbers previous is the sum of the previous two
/**
 * fib 6 = 13
 */
function fib(num){
    if(num === 0 || num === 1){
        return 1; 
    }
    else{
        return fib(num - 1) + fib(num - 2);
    }
}

console.log("fib:", fib(6));
