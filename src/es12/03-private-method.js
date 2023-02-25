class user {
    //constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //metodos
    //al utilizar # hace que el metodo speak solo pueda ser accedido dentro de la misma clase.
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}
// se hacen get y set privados.
const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);