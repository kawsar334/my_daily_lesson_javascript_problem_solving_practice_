

class RmoveDuplicate{
    constructor(arr){
        this.arr = arr;

    }

    removeDuplicateFromArray(){
        let unique =[]
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



// converting inheritence===============example 2------------------------

class ArrayProccesor{
    constructor(arr){
        this.arr=arr;
    }
}

class RemoveDuplicateArrayElement extends ArrayProccesor{
    constructor(arr){
        super(arr);
    }

    removeDuplicateFromArray(){
        const unique=[];
        for(let i=0; i<this.arr.length ; i++){
            if(!unique.includes(this.arr[i])){
                unique.push(this.arr[i]);
            }
        }
        return unique;
    }
}

const duplicate = new RemoveDuplicateArrayElement([1, 1, 2, 2, 3,5,3, 4]);

//print uinique  elements and sorted array
console.log(duplicate.removeDuplicateFromArray().sort((a, b)=>a-b)) 