



class Stack {
    constructor(){
        this.arr=[];
    }

    push(value){
        this.arr.push(value)
        return this.arr;
    }

    pop(){
        return this.arr.pop();
    }

    // print result 
    print(){
        return this.arr
    }
}


const newStach= new Stack();
newStach.push(1)
newStach.push(2)
newStach.push(3);
newStach.push(4); 
newStach.push(5);

// remove one element  from array
newStach.pop();

console.log(newStach.print())


// object access ---------
// const obj= {
//     "1":10,
//     "name":"kawsar",

// }

// console.log(obj["name"])

// another example of stack 

class AnotherStack{
    constructor(){
        this.count = 0;
        this.database={}
    }

    push(value){
        this.count++;
        this.database[this.count]=value;
        return this.database
    }

    pop(){
        if(this.count===0)return ;
        const value = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        return value
    }

}


const newAnotherStack = new AnotherStack()
console.log(newAnotherStack.push("kawsar"));
console.log(newAnotherStack.push("firoz"));
console.log(newAnotherStack.pop("kawsar==============="));



