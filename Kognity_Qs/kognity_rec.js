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

/**
 * Given Json Object, Loop until you find an array, if you do then loop until you find another array or "children" key
 */
function getSubtopics(obj) {
    let type = typeof obj;
    if (type === 'object') {
        for (let i in obj) {
            if (obj[i].name !== undefined && obj[i].name.indexOf('Subtopic') !== -1) {
                obj[i].children.map(items => subtopics.push(items));
            }
            getSubtopics(obj[i]);
        }
    }
}

function next() {
    if (state <= subtopics.length) {
        state++;
        console.log(subtopics[state].id);
    }
}

function previous() {
    if (state >= 0) {
        state--;
        console.log(subtopics[state].id);
    }
}

const subtopics = [];
let state = 0;
getSubtopics(JSON);
next();
next();
next();
previous();
previous();
previous();

function goDown(obj, search) {
    let type = typeof obj;
    if (type === 'object')
        for (let i in obj) {
            //Will just do a check if the key exists
            if (obj[i][`${search}`] !== undefined) {
                //On End of the tree
                if (obj[i][`${search}`].filter(item => item.children.length === 0).length > 0) {
                    obj[i][`${search}`].map(item => console.log(item));
                }
            }
            //otherwise keep going down
            goDown(obj[i], search);
        }
}
goDown(JSON, "children");

function getName(obj, search) {
    let type = typeof obj;
    if (type === 'object') {
        for (let i in obj) {
            //Will just do a check if the key exists
            if (obj[i][`${search}`] !== undefined) {
                console.log(obj[i][`${search}`]);
            }
            //otherwise keep going down
            getName(obj[i], search);
        }
    }
}

getName(JSON, "name");