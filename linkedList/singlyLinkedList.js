


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//     }

//     append(value){

//         const newNode = new Node(value);
//         if(this.head ===null){
//             this.head = newNode;
//             return
//         }
//         let current = this.head;
//         while(current.next){
//             current = current.next ;
//         }
//         current.next = newNode;
//     }
// }


// const newSinglyList = new SinglyLinkedList();

// newSinglyList.append(5)
// newSinglyList.append(10)
// newSinglyList.append(15)
// newSinglyList.append(15)

// console.log(JSON.stringify(newSinglyList,null, 2))



class AnotherExample_LinkedList{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length =0;
    }


    isEmpty(){
        return this.length===0
    };

    push(value){
        const newNode = {
            value:value,
            next:null
        };
        if(this.head ===null){
            this.head=newNode;
            this.tail = newNode;
            this.length++
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
      
      
        
    }
}


const newExample= new AnotherExample_LinkedList();
newExample.push(5)
newExample.push(50)
newExample.push(500)
newExample.push(5000)




// console.log("🧠head=======", JSON.stringify(newExample.head, null,2))
// console.log("tail=✔✔✔✔✔",JSON.stringify(newExample.tail, null,1))

// console.log(JSON.stringify(newExample, null, 2))

var threeSum = function (nums) {

    let result =[]
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1 ; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                console.log(nums[i])
                console.log("i", nums[i], "j", nums[j], "k", nums[k])
                console.log( nums[i]+ nums[j]+ nums[k])
            }
        }
    }
  
};
threeSum([2, 4, 3])
// console.log(threeSum([2, 4, 3]))
