function makeAnagram(a, b) {
    let count = 0;
    let commonChars = "";

    //find similar chars in both strings
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== -1) {

            //Case for Duplicate Chars --> Don't add them
            if (commonChars.indexOf(a[i]) === -1 || commonChars === "") {
                commonChars = commonChars + a.charAt(i);
            }
        }
    }

    //Subtracting number of common cars from each string 
    let s1Length = a.length - commonChars.length;
    let s2Length = b.length - commonChars.length;

    //Make sure both strings are the same length, then add the removed char count of each string
    // console.log(s1Length);
    // console.log(s2Length);

    count = s1Length + s2Length;

    return count;
}


console.log(makeAnagram("cde","abc")); //Return 4
console.log(makeAnagram("baddc", "dcbad")); //Return 2
console.log(makeAnagram("showman","woman")); //Return 2
console.log(makeAnagram("fcrxzwscanmligyxyvym","jxwtrhvujlmrpdoqbisbwhmgpmeoke")); //Return 30

//Return common chars
function commonChars (a,b){
    let result = "";
    for(let i = 0; i < a.length; i++){

        if(b.indexOf(a.charAt(i)) !== -1){
            result = result + a.charAt(i);
        }

    }
    console.log(a.length, b.length);
    
    return result;
}

console.log(commonChars("fcrxzwscanmligyxyvym","jxwtrhvujlmrpdoqbisbwhmgpmeoke"));
