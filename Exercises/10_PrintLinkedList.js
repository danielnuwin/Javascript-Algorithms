const SinglyLinkedListNode = {
    data: 17,
    next: 
    {
        data: 19,
        next: 
        {
            data: 5, next: null
        }
    }
}


function print(ll) {
    if (ll === null) {
        return;
    }
    else {
        console.log(ll.data);
        return print(ll.next);
    }
}

print(SinglyLinkedListNode);