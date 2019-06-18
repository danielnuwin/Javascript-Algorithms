/**
 * @param {For the input "beautiful^" your output was incorrect. The correct answer is cfbvUjgvm^.
2. For the input "this long cake@&" your output was incorrect. The correct answer is UIjt mpOh dblf@&.
3. For the input "a confusing /:sentence:/[ this is not!!!!!!!~" your output was incorrect. The correct answer is b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~.} str 
 */
function LetterChanges(str) {

    // code goes here 
    let result = "";
    //   let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        let curCharCode = str.charCodeAt(i);
        let nextChar = String.fromCharCode(curCharCode + 1);
        // console.log("curCharCode:", curCharCode, "nextChar:", nextChar, "nextCharCode: ",curCharCode + 1 );

        //if space or > z or special char
        //char === " "
        //97-122 --> a - z 
        //65-90 --> A - Z
        if (curCharCode < 65 || str.charAt(i) === " " || curCharCode > 90 && curCharCode < 97 || curCharCode > 122) {
            result += String.fromCharCode(curCharCode);
        }
        else if (vowels.indexOf(nextChar) !== -1) {
            result += nextChar.toUpperCase();
        }
        else {
            result += nextChar;
        }
    }
    return result;
}

function checkTest(input, output) {
    return `${input === output ? true : false },\n "${input}" \n "${output}"`;
}

console.log(checkTest(LetterChanges("beautiful^"), "cfbvUjgvm^"));
console.log(checkTest(LetterChanges("this long cake@&"), "UIjt mpOh dblf@&"));
console.log(checkTest(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"), "b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~"));

// console.log(String.fromCharCode("^"));
// console.log("~".charCodeAt(0));

//1) "beautiful^" --> cfbvUjgvm^
//2) "this long cake@&" --> UIjt mpOh dblf@&
//3) "a confusing /:sentence:/[ this is not!!!!!!!~" --> dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~
