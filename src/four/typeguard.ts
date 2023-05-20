
type Alphaneumeric = string | number
// keyof guard
function add(n1: Alphaneumeric, n2: Alphaneumeric): Alphaneumeric {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2
    }
    else {
        return n1.toString() + n2.toString()
    }
}

// in guard === used when dealing with objects

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string
    role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return 'admin'
    }
    else {
        return 'normal user'
    }
}

const normalUser: NormalUserType = { name: 'Mr. X' }
const adminUser: AdminUserType = { name: 'Mr. Y', role: 'admin' }



class Animal {
    name: string
    species: string
    constructor(name: string, species: string) {
        this.name = name
        this.species = species
    }
    makeSound() {
        console.log('I am making sounds')
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    bark() {
        console.log('bark bark')
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    meow() {
        console.log('meow meow')
    }
}

const doggo = new Dog('German', 'YOOOO')
const catto = new Cat('Persian', 'Pooooo')

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog
}

function getAnimal(obj: Animal) {
    if (isDog(obj)) {
        obj.bark()
    }
    else if (obj instanceof Cat) {
        obj.meow()
    }
    else {
        obj.makeSound()
    }
}