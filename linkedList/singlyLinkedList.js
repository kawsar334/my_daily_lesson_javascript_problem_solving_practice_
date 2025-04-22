


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

    append(value){

        const newNode = new Node(value);
        if(this.head ===null){
            this.head = newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current = current.next ;
        }
        current.next = newNode;
    }
}


const newSinglyList = new SinglyLinkedList();

newSinglyList.append(5)
newSinglyList.append(10)
newSinglyList.append(15)
newSinglyList.append(15)

console.log(JSON.stringify(newSinglyList,null, 2))

