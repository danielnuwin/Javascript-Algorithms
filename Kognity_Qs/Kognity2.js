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

function getSubtopics(){
    for(let levelone in JSON){
        // console.log(levelone);
        //First Children
        if(levelone === 'children'){
            // for(let obj in )
            // console.log(JSON[levelone]);
            let children =  JSON[levelone];

            for(let topics in children){
                // console.log(children[topics]);
                let subtopic = children[topics];

                for(let section in subtopic){
                    // console.log(section);
                    let sections = subtopic[section];
                   
                    if(section === 'children'){
                        // console.log(sections);
                        for(let child in sections){
                            // console.log(sections[child]);
                            //***** Subtopics Section [2 bojects in children array] == sections[child] */
                            let childrenSubtopic = sections[child];

                            for(let child in childrenSubtopic){
                                // console.log(child);
                                let childrenSubTopic = childrenSubtopic[child];
                              
                                if(child === 'children'){
                                    for(let childSection in childrenSubTopic){
                                        // console.log(childrenSubTopic[childSection]);
                                        reduceSubtopics.push(childrenSubTopic[childSection]);
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

function next(){
    if(state < reduceSubtopics.length - 1){
        state++;
        console.log(reduceSubtopics[state].id);
    }
}
function previous(){
    if(state >= 0 ){
        state--;
        console.log(reduceSubtopics[state].id);
    }
}

getSubtopics();
next();
next();
next();
previous();
previous();
previous();