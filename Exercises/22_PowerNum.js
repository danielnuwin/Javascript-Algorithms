//Function to do exponents 

function exponent (num, exp){

    let result = 1;

    for(let i = 1; i <= exp; i++){
        result *= num;
    }

    return result; 
}
console.log(exponent(2,2));
