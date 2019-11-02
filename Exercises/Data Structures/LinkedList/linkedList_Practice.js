class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    append(val) {
        //if head/tail == null
        if (!this.tail) {
            this.tail = this.head = new Node(val);
        }
        else {
            // >= 1 node
            let oldTail = this.tail;
            this.tail = new Node(val);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    prepend(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val);
        }
        else {
            let oldHead = this.head;
            this.head = new Node(val);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }
    deleteHead() {
        let returnHead = this.head.value;
        //Head == null
        if (!this.head) {
            return null;
        }
        else {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        return returnHead;
    }
    deleteTail() {
        let returnTail = this.tail.value;

        if (!this.tail) {
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
        return returnTail;
    }
    search(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === val) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }


}
class Node {
    constructor(val, prev, next) {
        this.value = val;
        this.prev = prev || null;
        this.next = next || null;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
// list.deleteHead()
list.deleteTail();
console.log(list.search(1));
console.log(list);
