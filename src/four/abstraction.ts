// will have necessary information, but not the nitty gritty complications


// IN Ts:
// interface

interface IVehicle {
    startEngine(): void
    stopEngine(): void
}

// const Vehicle: IVehicle = {
//     name: 'BMW',
//     model: 'ew200'
// }

class Vehicle implements IVehicle {
    constructor(public name: string, public kmRun: number) { }
    startEngine(): void {
        console.log('vroom vroom')
    }
    stopEngine(): void {
        console.log('phoooo o o o     tu tu')
    }
    test() {
        console.log('testing')
    }
}

const v1 = new Vehicle('toyota', 20000)

// abstract class
abstract class MotorCycle {
    constructor(public name: string, public kmRun: number) { }
    /* abstract startEngine(): void { } */ // ???
    stopEngine(): void {
        console.log('shoooooo    tu tu')
    }
    test() {
        console.log('testing')
    }
}

class Dukati extends MotorCycle {
    startEngine(): void {
        console.log('dishiyaaa')
    }
}

const b1 = new Dukati('dukati', 100)