//Write Function to do factorial of a number
/**
 * Formula
 * n * (n-1)
 */

 function fact(n){

    if(n === 0){
        return 1; 
    }
    else {
        return n * fact(n-1);
    }
 }

 console.log(fact(10));
 