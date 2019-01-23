//Check if string is a palindrome
let string = "racecar";

/**
 * note:
 * 1. reverse the string then check orignal if matches
 *  --> Using library function
 * --> using loop
 */

 function checkPalindrome(string){
     let rev = "";
    for(let i = string.length -1; i >= 0; i--){
        rev = rev + string.charAt(i);
    }
    if(rev === string){
        console.log("true");
        
    }
    else{
        console.log("false");
        
    }
 }
 checkPalindrome(string)

 console.log(string.split("").reverse().join("") === string);
 