/**
 * HashMap
 * datastructure that uses hashing to place key value pairs into it. 
 * 
 * HM{size, array/buckets} insert, remove, get, map(set, delete, get)
 * hash(key,size){tostring key, charCodeAt(), hashkey % size }
 */
class HashMap {
    constructor(size) {
        this.size = size;
        this.hm = new Array(this.size);
        for (let i = 0; i < this.hm.length; i++) {
            this.hm[i] = new Map();
        }
        console.log(this.hm);
    }
    insert(k, v) {
        let index = hash(k, this.size);
        this.hm[index].set(k, v);
    }
    delete(k) {
        let index = hash(k, this.size);
        let returnVal = this.hm[index].get(k);
        this.hm[index].delete(k);
        return returnVal;
    }
    get(k) {
        return this.hm[hash(k, this.size)].get(k);
    }
}
hash = (key, size) => {
    let sKey = key.toString();
    let hk = 0;
    for (let i = 0; i < sKey.length; i++) {
        hk += sKey.charCodeAt(i);
    }
    return hk % size;
}


const hm = new HashMap(10);

hm.insert(10, "hello10")
hm.insert(11, "hello11")
hm.insert(12, "hello12")
hm.insert("tramp", "helloTramp")
hm.insert("stamp", "helloStamp")
hm.insert(5000, "hello5000")
hm.delete(10)
console.log(hm.get(11));
console.log(hm);
