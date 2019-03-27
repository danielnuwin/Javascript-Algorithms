/**
 * Return Yes or No if the two strings have a matching substring. A substring can even just be one char
 */

 function twoString(s1,s2){

    //loop the first string. check if indexOf char exists in the second string. 

    for(let i = 0; i < s1.length; i++){
        if(s2.indexOf(s1.charAt(i)) !== -1){
            return "yes";
        }
    }

    return "no";
 }

 console.log(twoString("a", "and"));
 console.log(twoString("be", "cat"));
 