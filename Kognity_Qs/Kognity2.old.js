

/**
 * We structure our books as a type of “tree”: top node represents the whole book, the next level is called “topics” then “subtopics” then “sections”. Our api returns a JSON response that looks like:
{
    "name": "Biology HL",
    "id": 19,
    "children": [...],
}
Where “children” contains an array of other objects with the same structure. Sections have no children, subtopics and topics will always have at least one child.
We then need to be able to navigate to any section, but also be able to move from a section to the previous or next section (even if it is in a different topic/subtopic).
Note that we are imagining that we are on the client side: data has already been loaded and will not be lost between next() and previous() calls.

Create a next() function and a previous() function that return the next or previous (respectively) section id. 
This should cross subtopics/topics so that a user can go from beginning to end of the book. 
The next and previous function can take whatever arguments make sense, but there needs to be a clear way to advance through the entire book.

Example (using the sample json below):
next(...) -> 14
next(...) -> 16
next(...) -> 15
previous(...) -> 16
previous(...) -> 14
previous(...) -> 13

Example JSON:
{
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
}
 */
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
}

// First Section 1 --> Section --> Section 3
/**
 * section one: Starting point
 * json.child
 */
// let state = json['children'][0]['children'][0]['children'][0].id;
// console.log(start);

function nextold() {
    // console.log(json['children'][0]['children'][0]['children'][0]);

    if (state === 13) {
        state = json['children'][0]['children'][0]['children'][1].id;
        return state;
    }
    else if (state === 14) {
        state = json['children'][1]['children'][0]['children'][1].id;
    }

}
let state = null;
let reduceJSON = null;
function getState() {

    for (let obj in JSON) {
        // console.log(obj);

        //First Children
        if (obj === 'children') {

            for (let child in JSON[obj]) {
                //Second Children
                // console.log("hello:" ,JSON[obj][child]);
                let secondChild = JSON[obj][child];

                for (let section in secondChild) {
                    // console.log(secondChild[section]);
                    // console.log("sec:", section);
                    reduceJSON = secondChild[section];
                    //Third Child
                    if (section === 'children') {

                        for (let child in secondChild[section]) {
                            // console.log(secondChild[section][child]);
                            let thirdChild = secondChild[section][child]

                            for (let child in thirdChild) {
                                // console.log(thirdChild[child]);

                                let fourth = thirdChild[child];
                                if (child === 'children') {
                                    if (state === null) {
                                        // console.log(fourth[0].id);
                                        return fourth[0].id;
                                    }
                                    //Array of objects
                                    for (let child in fourth) {
                                        // console.log(fourth[child]);
                                        let fifth = fourth[child];

                                        for (let child in fifth) {
                                            // console.log(fifth[child]);

                                        }
                                    }

                                }
                            }
                        }
                    }
                }

            }
        }
    }
}

function next() {

    //++ on the array section from get state
    getState();
    
    // console.log(reduceJSON.length);
    for(let i = 0; i < reduceJSON.length; i++){
        console.log(reduceJSON[i]);
        
    }
    
}

next();