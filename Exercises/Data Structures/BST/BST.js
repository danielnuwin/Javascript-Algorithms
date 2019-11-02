/*
https://helloacm.com/comparing-left-and-right-branch-of-a-complete-binary-tree/
Write a function that determines whether the left or right branch of the tree is larger. 
The size of each branch is the sum of the node vlaues. The function should return the string “Right” 
if the right side is larger and “Left” if the left side is larger. If the tree has zero nodes or
 if the size of the branches are equal, an empty string “” should be returned.
*/
const solution = (arr) => {
    if (!arr) return "";
    if (arr.length === 0) return "";    
    const sum = (arr, idx) => {
        if (idx - 1 < arr.length) {
            if (arr[idx - 1] === -1) return 0;
            return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
        }
        return 0;
    };
    const left = sum(arr, 2);
    const right = sum(arr, 3);
    return (left == right) ? "" : (left > right ? "Left" : "Right");
};

const tree = [3, 6, 2, 9, -1, 10];

console.log(solution(tree));
