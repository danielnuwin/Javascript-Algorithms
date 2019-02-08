import JSON from './json'
const JSON = {
    "name": "Biology HL",
    "id": 19,
    "children": [
        {
            "name": "Topic 1",
            "id": 20,
            "children": [
                {
                    "name": "Subtopic 1",
                    "id": 21,
                    "children": [
                        {
                            "name": "Section 1",
                            "id": 13,
                            "children": []
                        },
                        {
                            "name": "Section 2",
                            "id": 14,
                            "children": []
                        },
                    ]
                },
                {
                    "name": "Subtopic 2",
                    "id": 22,
                    "children": [
                        {
                            "name": "Section 3",
                            "id": 16,
                            "children": []
                        },
                        {
                            "name": "Section 4",
                            "id": 15,
                            "children": []
                        },
                    ]
                }
            ]

        }
    ]
};

let state = 0; //initialstate
let reduceSubtopics = [];

function getChildren(array) {
    // console.log(array);
    //Array of Objects
    for (let i = 0; i < array.length; i++) {
        
        let obj = array[i];
        // console.log( obj);
        // if (typeof obj === 'object') {
            // console.log(checkType);
            for(let array in obj){
                // console.log(array);
                if(typeof obj[array] === 'object'){
                    // console.log(obj[array]);
                    //needs to return an array 
                    return obj[array];
                }
            }
        // }


    }

}

function getSubtopics() {
    //1. Obj > children[] > Obj > children[] > Obj > children[] > Obj.id This is the skeleton

    for (let obj in JSON) {
        // console.log(obj);
        let checkType = JSON[obj];
        // console.log(checkType);
        let children = [];
        //Check for the first children
        if (typeof checkType === 'object') {
            children = getChildren(checkType);
            // console.log(children)
            
            //Stop when children.length === 0
            while (children.length !== 0) {
                children = getChildren(children);
                console.log("children", children);
            }
        }



    }
    // console.log(reduceSubtopics);

    //if its an object, then get the children


    //if its the children array, then objects
}

// function next(){
//     if(state < reduceSubtopics.length - 1){
//         state++;
//         console.log(reduceSubtopics[state].id);
//     }
// }
// function previous(){
//     if(state >= 0 ){
//         state--;
//         console.log(reduceSubtopics[state].id);
//     }
// }

getSubtopics();
