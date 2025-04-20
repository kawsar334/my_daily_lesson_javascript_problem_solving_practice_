

class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
};

class ExampleLinkedList{
    constructor(){
        this.size=0;
        this.head=null
    };

    add(value){
        const newNode = new Node(value);
        if(this.head ===null){
            this.head = newNode;
            console.log("this.head", this.head)
        }else{
            let current = this.head;
            while(current.next !==null){
                current = current.next;
            }
            current.next = newNode

        }
        this.size++
    }

    remove(){
        
        if(this.head === null ){
            return `List is empty. Nothing to remove.`
        }
        if(this.head.next === null){
            this.head = null;
            this.size--
            return;
        }
        let current = this.head;
            while(current.next.next !==null){
                current = current.next;
            }
            current.next = null      

    }


    print(){
        if(this.head === null ){
            console.log("List is Empty !")
            return 
        }

        let current = this.head;
        let result =0;
        while(current !==null){
            result +=current.value;
            current = current.next;
        }
        result+= null;
        console.log(result)
    }
}


const newList = new ExampleLinkedList();

newList.add(5);
newList.add(10);
newList.add(20);
newList.add(30);

newList.remove();
newList.print();
console.log(JSON.stringify(newList,null , 2))
console.log(newList)