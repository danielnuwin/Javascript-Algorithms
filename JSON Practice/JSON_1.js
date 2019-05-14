var json = require('./sample.json'); //with path

// console.log(JSON.stringify(json));

//Using ForEach, ForIn, Map, 
//Create a function where you enter in a param and it will return you the object. 

// console.log(json.Response.NetConnectResponse);

//Print Name of each object or array with number of items
function getObject(obj) {
    let hm = {};

    for (let i in obj) {
        if (obj[i].length && typeof obj[i] === "object") {
            console.log(i, ":", obj[i].length);
            if (i === "destination_addresses") {
                hm[obj[i]] = "";
            }
        }
        //Check for Array && Object
        if (typeof obj[i] === "object" && typeof obj[i][0] === "object") {
            if (Object.keys(obj[i]).length > 1) {
                // console.log("obj-->", obj[i].length);
                // console.log("nope --> elements", Object.values(obj[i]));
                for (let j in obj[i]) {
                    console.log(obj[i][j].distance.value);
                    hm[i] = obj[i][j].distance.value
                    // getObject(obj[i][j]);
                }
            }
            else {
                getObject(obj[i][0]);
            }
        }
    }
    console.log(hm);

}
// getObject(json);

//get all values
function getObject2(obj, search) {
    let type = typeof obj;
    //non objects
    //***issue with nested status keys */
    if (obj[`${search}`]) {
        console.log(obj[`${search}`]);
    }
    else if (type === 'object') {
        for (let i in obj) {
            //Will just do a check if the key exists
            if (obj[i][`${search}`] !== undefined) {
                console.log(obj[i][`${search}`]);
            }
            //otherwise keep going down
            goDown(obj[i], search);
        }
    }
}

getObject2(json, "status");

// console.log(json['destination_addresses']);
