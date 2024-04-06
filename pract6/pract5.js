



// example one // using regular function 
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Example two/ using js object oriented programming .. 
console.log(arraysAreEqual([2, 3, 4], [2, 3, 4])); 
console.log(arraysAreEqual([2, 3, 4], [2, 4, 3])); 


class ArraysComparator {
    constructor(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }

    areEqual() {
        if (this.arr1.length !== this.arr2.length) {
            return false;
        }

        for (let i = 0; i < this.arr1.length; i++) {
            if (this.arr1[i] !== this.arr2[i]) {
                return false;
            }
        }

        return true;
    }
}

// Example usage
const comparator = new ArraysComparator([2, 3, 4], [2, 3, 4]);
console.log(comparator.areEqual()); // Output: true
console.log(new ArraysComparator([2, 3, 4], [2, 4, 3]).areEqual()); // Output: false
