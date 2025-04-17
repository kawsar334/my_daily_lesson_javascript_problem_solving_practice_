


// complecated things will hide 
class Properties {
    constructor(name, tier) {
        this.name = name;
        this.tier = tier;
    }
}

class Car extends Properties {
    constructor(name, tier, light) {
        super(name, tier)
        this.light = light
    }
    aboutCar() {
        return `this car name is ${this.name} and number of tier ${this.tier} and ${this.light} light `
    }
    static StaticMethod() {
        return ` could not access this method in instantiate-- it can add inside Class methods only ========`
    }

    get getName() {

        return `this car name is ${this.name}`
    }
    set setName(newName) {
        this.name = newName
    }

    carprice(quantity){
        // abstruction------
        let price =3000;
        let totalPrice = quantity *price;
        return `you have to pay ${totalPrice} for ${quantity} car`
    }

}



const newCar = new Car("lexus", 4, 10);
// console.log('prototype',Car.prototype === newCar.__proto__)
console.log(newCar.aboutCar());

// get and set method
console.log(newCar.getName);
console.log(newCar.setName = "new name");



// 
console.log(newCar.carprice(1));






