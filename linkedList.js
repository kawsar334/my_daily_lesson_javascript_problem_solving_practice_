




// // singly linkedlist
// class SinglyLinkedList {
//     constructor() {
//         this.head = null; 
//         this.tail = null; 
//         this.length = 0;
//     }
//     isEmpty(){
//         return this.length ===0;
//     }

//     push(value){
//         let newNode = {
//             value:value,
//             next:null,
//         }
      
//        if(this.isEmpty()){
//             this.head= newNode;//head:{value:5,next:null, }
//             this.tail = newNode// tail{value:5,next:null}
//        }else{
//            this.tail.next = newNode;//head:{value:5,next:{value:6,next:null, }, }
//            this.tail = newNode; //{ value: 6, next: null }
//         this.length++
//        }
//        return this.length++
//     }

//     pop(){
//         if (this.isEmpty()) return undefined;

//         let current = this.head;
//         let newTail = current;
//         if(this.length===1){
//             const val = this.head;
//             this.head=null
//             this.tail = null;
//             this.length--;
//             return val

//         }
//         while(current.next){
//             newTail = current;
//             this.tail.next = null
//             this.length --;
//             return current
//         }
//     }


// }

// const list = new SinglyLinkedList(); 
// list.push(5);
// list.push(3);
// list.push(1);

// list.pop();
// list.pop();

// // console.log(JSON.stringify(list, null, 1));
// // console.log(list)




// // another singly Linked list example ==============

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class AnotherSinglyLinkedList {
//     constructor() {
//         this.head = null;
//     };

//     push (value){
//         const newNode = new Node(value);
//         if(this.head===null){
//             this.head = newNode
//         }else{
//             let current = this.head;
//             while(current.next !==null){
//                 current = current.next;
//             }
//             current.next = newNode
//         }
//     }

//     pop(){
//         if(this.head=== null){
//             return `List is empty `
//         }
//         if(this.head.next ===null){
//             this.head = null;
//             return ;
//         }
//         let current = this.head;

//     }


// }

// const newSlist= new AnotherSinglyLinkedList();

// newSlist.push(10);
// newSlist.push(20);
// newSlist.push(30);

// console.log(JSON.stringify(newSlist,null, 2));


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
            this.head = newNode
        }else{
            let current = this.head;
            console.log("current",current.next)
            while(current.next !==null){
                current = current.next;
            }
            current.next= newNode
        }
        this.size++
    }
}


const newList = new ExampleLinkedList();

newList.add(5);
newList.add(10);
newList.add(20);


console.log(JSON.stringify(newList,null , 2))
console.log(newList)