/**  
   #
  ##
 ###
####
Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Notes:
1. Start from top with n-1 spaces then #, then add /n
2. Loop until hits n
 */

function stairCase(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
        //-1 to remove extra space
        string = string + ' '.repeat(n-i-1) + '#'.repeat(i+1) + '\n';
    }
    return string;
}

console.log(stairCase(6));
console.log(stairCase(10));
