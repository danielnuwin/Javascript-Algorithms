//Write a method which will remove any given character from a String? (solution)
let string = "racecar";
let char = "r";

/**
 * Notes: 8:09-8:14(5min)
 * 1. convert string into array then find the index to remove then convert back
 * to string
 * Qs: Are there multiple chars with same value
 */

 function removeChar(string, char){
    let result = "";
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) !== char){
            result = result + string.charAt(i);
        }
    }
    console.log("removeChar", result);

 }
 removeChar(string,char);