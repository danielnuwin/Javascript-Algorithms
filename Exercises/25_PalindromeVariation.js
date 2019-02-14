//Given String, split into as few strings
// as possible such as each string is a pallindrome. For example, given the input racecarannakayak, return ['racecar','anna', 'kayak']
//string abc should return ["a", "b", "c"]
/**
 * Questions:
 * 1. How long is a valid substring. ist here a minimum length?
 * 
 * Notes: Checking what is a valid palindrome. 
 * 1. Start at first index, check for another occurence of the char.
 * 2. If so, then check if it is a valid palindrome. --> Helper Function to check 
 * 3. Use Substring to get the palindrome and push it to result array. 
 * 4. Continue on next char
 * 
 * 
 * other notes:
 *  * Notes: Checking what is a valid palindrome. 
 * Edge Cases: nothing returns
 * 
 * Tries:
 * 1. Loop, check if element has another element, if it does then check palindrome between those two indexes
 * 2. Helper function to check if valid
 * 3. Use two loops to check first int until it finds another char that is the same then check if its a palindrome
 * 
 * What I actually did:
 * 1. Created a Helper function to check if its a valid palindrome
 * 2. Two For Loops. First loop: check the first value, Second loop: will check each value preceding it 
 * 3. During Second loop I will check if the preceding value equals to the first value. If it does, check if valid palindrome using substring to get the value. 
 */
 

let string = "racecarannakayakabc";

 function splitPalindrome(string){
    //Result Array
    let result = [];
    for(let i = 0; i < string.length; i++){
        let cur = string.charAt(i);
        
        for(let j = i + 1; j < string.length; j++){
            let next = string.charAt(j);

            if(cur === next){
                let substring = string.substring(i, j+1);
                if(checkPalindrome(substring)){
                    result.push(substring);
                }
            }
        }
    }
    //check for edge case of single char palindrome
    if(result.length === 0){
        return string.split("");
    }
    return result;
 }

 function checkPalindrome(string){
     let reverse = string.split("").reverse().join("");
     return reverse === string; 
 }

 console.log(splitPalindrome("abc"));
 console.log(splitPalindrome(string));
