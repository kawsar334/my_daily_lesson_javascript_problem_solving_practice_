


class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }

}


class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0;
    }
    isEmpty(){
        return this.length ===0;
    }

    push(value){
        
    }
}

const newNod = new SinglyLinkedList(5);
console.log(newNod.isEmpty());