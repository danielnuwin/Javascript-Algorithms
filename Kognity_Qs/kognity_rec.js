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