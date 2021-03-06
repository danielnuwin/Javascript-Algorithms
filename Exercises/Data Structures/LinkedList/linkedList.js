class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(val) {
        if (this.tail === null) {
            this.tail = this.head = new Node(val);
        }
        else {
            let oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;

        }
        // console.log(this);
    }

    prepend(val) {
        if (this.head === null) {
            this.head = this.tail = new Node(val);
        }
        else {
            let oldHead = this.head;
            this.head = new Node(val);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
        // console.log(this);
    }

    deleteHead() {
        let removedHead = this.head;
        if (this.head === null) {
            return null;
        }
        else {
            //Only one node in list
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null
            }
        }
        return removedHead.value;
    }

    deleteTail() {
        let deleteTail = this.tail;
        if (this.tail === null) {
            return null;
        }
        else {
            if (this.tail === this.head) {
                this.tail = this.head = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }
        return deleteTail.value;
    }

    search(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === val) {
                return currentNode
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next || null;
        this.prev = prev || null;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
// console.log(list.deleteHead());
// console.log(list.deleteHead());
// console.log(list.deleteHead());
// console.log(list.deleteTail());
// console.log(list.deleteTail());
// console.log(list.deleteTail());
console.log("search:",list.search(2));