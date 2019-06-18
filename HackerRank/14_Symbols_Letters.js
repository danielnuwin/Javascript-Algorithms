function SimpleSymbols(str) {

    // code goes here  
    //Check if it is Number.isNan(parseInt(String)) ? then Check : skip 

    for (let i = 0; i < str.length; i++) {
        // console.log(str.charAt(i));
        const curChar = str.charAt(i);
        //Only Check for Letters and 
        if (curChar !== "+" && curChar !== "=") {
            //Check if it is a Letter
            // console.log(curChar, Number.isNaN(curChar));

            if (isNaN(curChar)) {
                // console.log(str.charAt(i - 1), curChar, str.charAt(i + 1));
                if (str.charAt(i - 1) !== "+" || str.charAt(i + 1) !== "+") {
                    console.log(str.charAt(i - 1), curChar, str.charAt(i + 1));
                    return false;
                }
            }
        }
    }
    return true
}

console.log(SimpleSymbols("+d+=3=+s+"));  //true     
console.log(SimpleSymbols("f++d+"));    //false  

// console.log(isNaN('10px'));

console.log(/[0-100]/.test("i"));

