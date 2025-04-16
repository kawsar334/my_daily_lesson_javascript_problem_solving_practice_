

// example one
const iterateArray1=(items)=>{
    return items.map(i => i * 2);
}
console.log(iterateArray1([1, 2, 4, 5]))


// // example 2
const iterateArray2= (items)=>{
    let result =[];
    for(let i=0; i< items.length; i++){
        result.push(items[i] * 5)
    }
    return result
};
console.log(iterateArray2([1, 2, 4, 5]))


const multiply2Array = (arr1, arr2) => {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr2[i] * arr1[i]);
    }
    return result;
}
console.log(multiply2Array([2, 3, 4], [5, 1, 6, 3, 4]));





// converting js class inheritence -------------------------===========================
class ArrayProccesor {
    constructor(arr) {
        this.arr = arr;
    }
}


class ArrayOperations extends ArrayProccesor {
    constructor(arr) {
        super(arr);
    }
    DoubleItems() {
        return this.arr.map((i) => i * 2);
    }
    multiplyByFive() {
        const result = [];
        for (let i = 0; i < this.arr.length; i++) {
            result.push(this.arr[i])
        }
        return result;
    }
    multiplyWithAnotherArray(otherArray) {
        let result = [];
        const length = Math.min(this.arr.length, otherArray.length);
        for (let i = 0; i < length; i++) {
            result.push(this.arr[i] * otherArray[i])
        }
        return result;
    }

}

const arrayOps = new ArrayOperations([1, 2, 5, 3]);
console.log("Double Items ", arrayOps.DoubleItems());
console.log("multiply by 5 ", arrayOps.multiplyByFive());
console.log("multiply with another array  ", arrayOps.multiplyWithAnotherArray([6,2,7,5]));

