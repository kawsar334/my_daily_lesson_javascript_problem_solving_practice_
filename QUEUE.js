

class QUEUE{
    constructor(){
        this.arr=[]
    }

    unshift(value){
        this.arr.unshift(value);
        return this.arr;
    }
    shift(value) {
        this.arr.shift(value);
        return this.arr;
    }
}

const newQUEUE = new QUEUE();



console.log(newQUEUE.unshift(5))
console.log(newQUEUE.unshift(7))
console.log(newQUEUE.shift());

