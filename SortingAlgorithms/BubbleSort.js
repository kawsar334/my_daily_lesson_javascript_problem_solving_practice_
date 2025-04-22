

class ArrayProccess {
    constructor(arr) {
        this.arr = arr;
    }
}


class BubbleSort extends ArrayProccess {
    constructor(arr) {
        super(arr)
    }

    Sort() {
        let n = this.arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                }

                // ternery operation-------- added swap--
                // this.arr[j] > this.arr[j + 1] ? ([this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]])
                //     : null;

            }
        }
        return this.arr
    }


}

// const newBubbleSort = new BubbleSort([5, 2, 8, 1, 3]);
// console.log("first example with class :", newBubbleSort.Sort())


const bubble = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                console.log(arr[j], "&", arr[j + 1], "orginal_arr", arr);
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr

}

// console.log("from function:", bubble([5, 2, 8, 1, 3,4]));


// another example
class Another_Example_Of_Bubblesort {
    #arr
    constructor(arr) {
        this.#arr = arr;

    }

    sort() {
        const n = this.#arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (this.#arr[j] > this.#arr[j + 1]) {
                    const temp = this.#arr[j]
                    this.#arr[j] = this.#arr[j + 1]
                    this.#arr[j + 1] = temp;
                    console.log(this.#arr[j], "and ", this.#arr[j + 1], "arr", this.#arr)
                }
            }
        }
        return this.#arr
    }
}

// const newBubble = new Another_Example_Of_Bubblesort([50, 20, 80, 10, 30, 40]);
// console.log( newBubble.sort());