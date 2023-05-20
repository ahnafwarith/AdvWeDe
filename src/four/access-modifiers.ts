class BankAccount {
    id: number
    name: string
    private _balance: number

    constructor(id: number,
        name: string,
        balance: number) {
        this.id = id
        this.name = name
        this._balance = balance
    }

    getBalance() {
        console.log(`My current balance is ${this._balance} `)
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount
    }
}


const acc = new BankAccount(1421, 'Ahnaf', 1000000)
console.log(acc)