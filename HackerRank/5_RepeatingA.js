/**
 * Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
 */


function repeatedString(s, n) {
    let a_count = 0;
    //Get a count in the initial string
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a') {
            a_count++;
        }
    }

    //No need to move on
    if (a_count === 0) {
        return a_count;
    }
    else {
        //How many times to multiply the a_count
        let mult = Math.floor(n / s.length);
        
        let rem = n % s.length;
        //Case 1: N % String.length === 0, then N /String.length * a_count
        if (rem === 0) {
            return mult * a_count;
        }
        //Case 2: N % String.length > 0, if has a remainder then do then do ceiling of the mult. ** Have to do the minus here
        else {
            //Having a remainder you can subtract or get the substring of everything execept the minus. 
  
            //count a's in newString
            let a_count_newString = 0;

            for (let i = 0; i < rem; i++) {
                if (s.charAt(i) === 'a') {
                    a_count_newString++;
                }
            }
            // console.log(" Math.floor(mult * a_count)",  Math.floor(mult * a_count), "a_count_newString", a_count_newString);
            
            //The substract remainder takes care of the decimal
            return Math.floor(mult * a_count) + a_count_newString;
        }

    }

}

console.log(repeatedString('a', 1000000000000)); //1000000000000
console.log(repeatedString('abcac', 10)); //4
console.log(repeatedString('aba', 10));//7
console.log(repeatedString('abc', 29));//10
console.log(repeatedString('aaa', 29));//29

