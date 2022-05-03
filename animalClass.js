class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const animal1 = new Animal("tom", 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isCute());



class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
}

const tommy = new Dog("tommy", 4, 30);
console.log(tommy);