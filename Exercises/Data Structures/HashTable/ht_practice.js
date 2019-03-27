//Create Hash Function that returns index key
// hash(key, size)

//Create Hash Table Class implementing Map datastructure with array. 
//Create Insert, Delete, Get Methods for Hash Table 
/**
 * Insert(key, value)
 * 
 * Delete(Key) Return value
 * 
 * Get(Key) Return value
 * 
 * Map Functions: get(key), set(key, value), delete(key) 
 */


const hash = (key, size) => {
    let hashkey = 0;
    for (let i = 0; i < key.length; i++) {
        hashkey += key.charCodeAt(i);
    }
    // console.log("key:",hashkey % size);
    return hashkey % size;
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = new Map();
        }
    }
    insert(key, value) {
        const index = hash(key, this.size);
        this.table[index].set(key, value);
        console.log("inserted:", value, "table:", this.table);
    }
    get(key) {
        const index = hash(key, this.size);
        console.log("get:", this.table[index].get(key));
        return this.table[index].get(key);
    }

    remove(key) {
        const index = hash(key, this.size);
        const deleted = this.table[index].get(key);
        this.table[index].delete(key);
        console.log("delete: ", key, deleted, "`\n`table: ", this.table); 
        return deleted;
    }
}

const hashTable = new HashTable(10);

// console.log(ht);

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')

hashTable.get('mina');

hashTable.remove('serena');