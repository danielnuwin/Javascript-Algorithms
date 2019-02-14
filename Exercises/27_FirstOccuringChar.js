/**
 * Find the first recurring Character in a string
 * 
 * Create a function that returns the first repeated character in a string 
(Strict definition: return the first character where that same character
exists to the left in the string).
first_repeat("") -> None
first_repeat("A") -> None
first_repeat("ABC") -> None
first_repeat("AA") -> "A"
first_repeat("ABA") -> "A"
first_repeat("ABBA") -> "B"
first_repeat("BACDEFGHIJBQWERUAAAA") -> "B"

 */

function first_repeat(string) {


    for (let i = 0; i < string.length; i++) {

        let current = string.charAt(i);

        for (let j = i + 1; j < string.length; j++) {

            let next = string.charAt(j);

            if (current === next) {
                return current;
            }
        }
    }

    return "None";
}

// console.log(first_repeat(""))
// console.log(first_repeat("A"))
// console.log(first_repeat("ABC"))
// console.log(first_repeat("AA"))
// console.log(first_repeat("ABA"))
// console.log(first_repeat("ABBA")) //Returns A not B
// console.log(first_repeat("BACDEFGHIJBQWERUAAAA"))


function first_repeatHM(string) {
    let hm = {};

    if (string !== "") {
        for (let i = 0; i < string.length; i++) {

            if (string.length <= 1) {
                //Case 2 single case
                return "None";
            }
            else if (!hm[string.charAt(i)]) {
                hm[string.charAt(i)] = 1;
            }
            else {
                //Case 4-7
                return string.charAt(i);
            }
        }
        //Case 3, "ABC"
        return "None"
    }
    else {
        //Case 1, Undefined
        return "None";
    }
}

console.log(first_repeatHM(""))
console.log(first_repeatHM("A"))
console.log(first_repeatHM("ABC"))
console.log(first_repeatHM("AA"))
console.log(first_repeatHM("ABA"))
console.log(first_repeatHM("ABBA"))
console.log(first_repeatHM("BACDEFGHIJBQWERUAAAA"))
