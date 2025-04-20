


class ArrayProccess {
    constructor(arr){
        this.arr= arr;
    }
}

class LinearSearch extends ArrayProccess{
    constructor(arr){
        super(arr)
    }
    search(element){
        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i] === element){
                return i;
            }
        }
        return -1
    }
}

const newLinearSearch = new LinearSearch([5,10,4,11,20]);

console.log(newLinearSearch.search(20))