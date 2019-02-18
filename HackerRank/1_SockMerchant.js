/*
* Find the amount of Miss Matched Socks

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color .
 There are three odd socks left, one of each color. The number of pairs is .
*/

let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 7; 

function sockMerchant(n, ar) {

    let hm = {};
    let pairs = 0;

    for (let i = 0; i < ar.length; i++){
        if(!hm[ar[i]]){
            hm[ar[i]] = 1; 
        }
        else {
            hm[ar[i]] = hm[ar[i]] + 1;
           
            if(hm[ar[i]] % 2 === 0){ // First time 1, second match 2 then add that pair, next pair is 3, dont add, next is 4, then add, etc
                pairs++;
            }
        }
    }
    return pairs; 
}

console.log(sockMerchant(7,array));
console.log(sockMerchant(10,[1, 1, 3, 1, 2, 1, 3, 3, 3, 3 ]));
