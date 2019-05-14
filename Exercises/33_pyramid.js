/**
 * given array, print 
5 4 3 2 1
5 4 3 2
5 4 3
5 4
5 
notes:
1. reverse array
2. two loops, first print entire list, then next either pop off array or iterate one less than size

Steps:
reverse the array. 
loop with the length of array only 
convert array to string 
pop reverse array 
 */

const array = [1, 2, 3, 4, 5];

function pyramid(array) {
    let reverse = array.reverse();
    const length = array.length;
    let string = "";

    for (let i = 0; i < length; i++) {
        //flatten array to string
        string = string + reverse.join("") + '\n';
        reverse.pop();
    }
    console.log(string);
}

pyramid(array);

function res(arr) {
    var output = ""
    arr.forEach(function (val, index) {
        output = output + val;
    });
    console.log(output)
    arr.pop()
    if (arr.length > 0) {
        res();
    }
}

res(array);