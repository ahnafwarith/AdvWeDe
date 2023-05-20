class Counter {
    static counter: number
    constructor(counter: number) {
        Counter.counter = counter
    }
    static increment(): number {
        return Counter.counter = Counter.counter + 1
    }
    decrement(): number {
        return Counter.counter = Counter.counter - 1
    }
}

const instance1 = new Counter(0)
const instance2 = new Counter(1)
// Counter.counter = Counter.counter + 1
// instance1.increment()
// instance2.increment()
Counter.increment()