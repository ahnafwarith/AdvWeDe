class People {
    takeNap() {
        console.log('I am sleeping 8 hours a day')
    }
}

class BracStudent extends People {
    takeNap(): void {
        console.log(`I am sleeping 2 hours a day`)
    }
}

class Developer extends People {
    takeNap(): void {
        console.log(`I am sleeping 5 hours a day`)
    }
}

function getNap(param: People) {
    param.takeNap()
}

const p1 = new People()
const p2 = new BracStudent()
const p3 = new Developer()