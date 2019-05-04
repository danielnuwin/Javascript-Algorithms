/**
 * This problem was asked by Dropbox.

Given a list of words, determine whether the words can be chained to form a circle. A word X can be placed in front of another word Y in a circle if the last character of X is same as the first character of Y.

For example, the words ['chair', 'height', 'racket', touch', 'tunic'] can form the following circle: chair --> racket --> touch --> height --> tunic --> chair.

Notes:
1. Start of the Circle: Last char of word matches the first char of a word. if it does then Add to array. 

first loop: get the last char of word, then indexOf or includes that char in the array.

loop through array then add first and last char into a hashtable with first and last chars as keys and values is their word

Qs: what to return if not all words can be chained?
 */

const words = ['chair', 'height', 'racket', 'touch', 'tunic'];

function chain(words) {

    const ht = {};

    //Add to HT
    for (let i = 0; i < words.length; i++) {
        //First Char
        if(!ht[words[i].charAt(0)]){
            ht[words[i].charAt(0)] = words[i];
        }
        //Last Char
        if(!ht[words[i].charAt(words[i].charAt(words.length - 1))]){
            ht[words[i].charAt(words.length -1)] = words[i];
        }
    }

    console.log(ht);
}

chain(words);

function chain2(words) {

    const result = "";

    for (let i = 0; i < words.length; i++) {
        const firstChar = words[i].charAt(0);
        const lastChar = words[i].charAt(words[i].length - 1);

        console.log(firstChar, lastChar);
        //Check if 
        
    }
    
}

chain2(words);