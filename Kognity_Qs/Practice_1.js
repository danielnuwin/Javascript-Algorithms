const data = require('./data.json')

// console.log(data);

/**
 * Create a function to move next and back 
 * Get All the Sections using recursion
 */

let sections = [];
let state = 0;
function getSections(obj,search) {
    for (let i in obj) {
        if (obj[i].name.includes('Subtopic')) {
            sections = sections.concat([...obj[i].children]);
        }
        if(obj[i][`${search}`] !== undefined){
            console.log("name:",obj[i][`${search}`]);
        }
        getSections(obj[i].children,search)
    }
}


function next() {
    state++;
    if (sections.length >= state) {
        console.log(sections[state].id);
    }
}
function back() {
    state--;
    if (sections.length >= 0) {
        console.log(sections[state].id);
    }
}

getSections(data,'id');
// console.log("sections:", sections);

next();
next();
next();
back();
back();
back();