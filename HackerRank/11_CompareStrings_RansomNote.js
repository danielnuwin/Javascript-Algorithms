/**
 * Find out if the two strings that contains a sentence is a subset of the other string. 
 * 
 * Notes: 
 * 1. Use Hashmap to find occurences
 * 2. includes, indexOf
 */

const mag = "give me one grand today night"
const note = "give one grand today"

function checkMagazine(magazine, note) {
    //join into array, loop and check if a given string is in the other

    let hm = {};

    const magz = magazine.split(" ");
    const notez = note.split(" ");

    for (let i = 0; i < notez.length; i++) {
        const word = notez[i];
        // console.log(word);

        if(!hm[notez[i]]){
            hm[notez[i]] = 1; 
        }
        else{
            hm[notez[i]] = hm[notez[i]] + 1
        }

        if (magz.indexOf(word) === -1) {
            console.log(word);
            return "No"
        }
    }
    return "Yes";


    //Return Yes or No
}

// console.log(checkMagazine(mag, note));

//Issue with double words
// console.log(checkMagazine("two times three is not four", "two times two is four"));


function checkMagazine2(magazine, note) {
    let hm = {};
    let magArray = magazine.split(" ");
    let noteArray = note.split(" ");

    for(let i in magArray){
        //Add to HM
        if(!hm[magArray[i]]){
            hm[magArray[i]] = 1;
        }
        else{
            //update count if exists
            hm[magArray[i]] =  hm[magArray[i]] + 1;
        }
    }

    //loop through note
    for(let i in noteArray){
        let word = noteArray[i];

        //if word exists in hm, the subtract count && count > 0
        if(hm[word] > 0){            
            hm[word] = hm[word] - 1;
        }
        else{
            // console.log(word);
            return "No"
        }
    }
    return "Yes";
}

console.log(checkMagazine2("two times three is not four", "two times two is four"));
console.log(checkMagazine2("ive got a lovely bunch of coconuts", "ive got some coconuts"));
