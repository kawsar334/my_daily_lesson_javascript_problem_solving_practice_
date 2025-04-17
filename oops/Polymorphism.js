

// example of polymorpism=================

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
   
}



const newCar = new Car("lexus", 4, 10);
const toyota = new Car("Toyota", 4,4)
console.log(newCar.aboutCar());
console.log(toyota.aboutCar());







