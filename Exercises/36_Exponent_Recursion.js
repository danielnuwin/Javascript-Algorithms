/**Write a program to calculate exponents using recursions
 * Recursion is base^to power of number
 * exponent = 1 return the base num
 *          = 0 return 1
 * */
 function exp(num, exponent){
     if(exponent === 0){
         return 1;
     }else if (exponent === 1){
         return num;
     }
     else{
         return num * exp(num,exponent - 1);
     }
 }
 console.log(exp(2,4));