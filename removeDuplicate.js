// 1. remove duplicate(Set function + manully)
//     in: -[1, 1, 2, 2, 3, 3, 4]
// out: -[1, 2, 3, 4]

class RmoveDuplicate{
    constructor(arr){
        this.arr = arr;

    }

    removeDuplicateFromArray(){
        let unique =[]
        let element1=this.arr[0]
        for(let i=0; i<this.arr.length; i++){
            if (!unique.includes(this.arr[i])){
                unique.push(this.arr[i])
            }  
                    
        }
        return unique;
    }
}

const newArray = new RmoveDuplicate([1, 1, 2, 2, 3, 3, 4]);

console.log(newArray.removeDuplicateFromArray());