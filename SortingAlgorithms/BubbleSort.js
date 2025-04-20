

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
                // if (this.arr[j] > this.arr[j + 1]) {
                //     [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                // }
                
                // ternery operation-------- added swap--
                this.arr[j] > this.arr[j + 1] ? ([this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]])
                    : null;

            }
        }
        return this.arr
    }


}

const newBubble = new BubbleSort([5, 2, 8, 1, 3]);
console.log(newBubble.Sort())