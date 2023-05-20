class Human {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    teach(subject: string) {
        return `Teaching ${subject}`
    }

}

class Student extends Human {
    constructor(name: string, age: number) {
        super(name, age)
    }

    makeSleep(hours: number) {
        return `This ${this.name} sleeps for ${hours}`
    }

}

class Teacher extends Human {
    profession: string
    constructor(name: string, age: number, profession: string) {
        super(name, age)
        this.profession = profession
    }
}
const ahnaf = new Student('ahnaf', 21)
ahnaf.makeSleep(7)

const anika = new Teacher('anika', 25, 'physics')
anika.teach('math')