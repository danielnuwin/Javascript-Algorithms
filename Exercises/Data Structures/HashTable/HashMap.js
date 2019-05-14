/**
 * HashTable: 
 * Implement by one array of maps (buckets) with a hash function
 * 
 * cons()
 *{ this.size, ht = []}
 * Methods:
 * Search(key)
 * Insert(key,val)
 * Remove(key)
 * Size()
 * IsEmpty()
 * 
 * Hash(key, size)
 * key.tostring() // loop through each char, get the charCode, then add it to hash key to mod with the size
 * return hashkey % size
 */

class HashMap {
    constructor(size) {
        this.size = size;
        this.hm = new Array(this.size);
        this.hm.forEach(item => item = new Map())
    }
    insert(k,v) {
        let indx = hash(k,this.size);
        this.hm[indx].set(k,v);
    }
    remove(k) {
        let indx = hash(k,this.size);
        let removed = this.hm[indx].get(k);
        this.hm[indx].delete(k);
        return removed;
    }
    get(k) {
        return this.hm[hash(k,this.size)].get(k);
    }
}

hash = (key, size) => {
    let sKey = key.toString();
    let hashKey = 0;
    for(let i = 0; i < sKey.length; i++){
        hashKey += sKey.charCodeAt(i);
    }
    return hashKey % size;
}

const hm = new HashMap(5);
hm.insert(10,"hello10")
hm.insert(11,"hello11")
hm.insert(12,"hello12")
hm.insert("tramp","helloTramp")
hm.insert("stamp","helloStamp")
hm.insert(5000,"hello5000")
hm.remove(10)
console.log(hm.get(11));
console.log(hm);
