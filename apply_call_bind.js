




const person={
    name:"kawsar firoz",
    sName:"firoz"
}

function greet(age){
    console.log(this.sName)
    console.log(this.name, age)
}


greet.call(person, 22)
greet.apply(person, [30])
const greetKawsar = greet.bind(person);

greetKawsar(20)