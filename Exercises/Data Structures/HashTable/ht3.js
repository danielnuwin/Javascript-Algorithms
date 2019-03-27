class HashTable {
    constructor() {
        this.size = 10;
        this.buckets = new Array(this.size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value) {
        let idx = hash(key, this.size)
        this.buckets[idx].set(key, value)
        // console.log(this.buckets);
    }
    remove(key) {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        // console.log(this.buckets);
        return deleted
    }
    search(key) {
        let idx = hash(key, this.size)
        // console.log(this.buckets);
        return this.buckets[idx].get(key)
    }
}

const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
}

const hashTable = new HashTable();

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')

hashTable.search('rei')
hashTable.search('lita')
hashTable.search('serena')

// hashTable.remove('darien')
// hashTable.remove('mina')

console.log(hashTable);
console.log(hashTable.search('rei'));
