function add(num1: number, num2: number): number {
    return num1 + num2
}

const addArrow = (num1: number, num2: number): number => num1 + num2

const arr = [1, 3, 5, 7]

const newArr = arr.map((number: number) => number.toExponential())

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'Ahnaf',
    balance: 1000000,
    addBalance(money: number) {
        console.log(`New balance is ${this.balance + money}`)
        // return this.balance + money
    }
}