/*
You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string , remove an  at positions  and  to make  in  deletions.
*/

function alternatingCharacters(s) {
    //Vars
    let count = 0;

    //if containing only As or Bs, Return s.length - 1. 

    //Contains only As or Bs
    if( (s.indexOf('A') !== -1 && s.indexOf('B') === -1) || (s.indexOf('B') !== -1 && s.indexOf('A') === -1)){
        return s.length - 1;
    }
    else{ //if Next Char === Cur Char, then increment count

        for(let i = 0; i < s.length; i++){
            let cur = s.charAt(i);
            let next = s.charAt(i+1);
            if(next !== undefined && cur === next){
                count++
            }
        }
    }
    return count;
}
console.log(alternatingCharacters('AAAA')); //3
console.log(alternatingCharacters('BBBBB')); //4
console.log(alternatingCharacters('ABABABAB'));//0
console.log(alternatingCharacters('BABABA'));//0
console.log(alternatingCharacters('AAABBB'));//4
