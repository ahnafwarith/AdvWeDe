function commonArr(arr1: any, arr2: any) {
    const finalArray = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in arr2) {
            finalArray.push(arr[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in arr1 == true && arr2[i] in finalArray != true) {
            finalArray.push(arr2[i])
        }
    }
    return finalArray
}


function guardian(param: unknown): void {
    if (typeof param == "string") {
        console.log(param)
    }
    else {
        console.log('The given parameter is invalid')
    }
}

guardian([19])

class PersonX {
    constructor(private _name: string, private _age: number) { }

    public getDetails(): string {
        return `My name is ${this._name} and I am ${this._age} years old`
    }
}

class StudentX extends PersonX {
    constructor(private _grade: string, name: string, age: number) {
        super(name, age)
    }

    public getGrade(): string {
        return this._grade
    }
}

function Logger(str: string, num: number = 3) {
    let i = 0
    while (i < num) {
        console.log(str)
        i = i + 1
    }
}

Logger('hello', 10)

function reverser<T>(...arr: T[]): T[] {
    const newArr = arr.reverse()
    return newArr
}

console.log(reverser('Jhankar', 'Bhaia', 'means', 'BEST'))


type HomoSapien = {
    name: string;
    age: number
}

function LegalChecker(params: HomoSapien[]) {
    const newArr: HomoSapien[] = params.filter(overEighteen => overEighteen.age >= 18)
    return newArr
}

console.log(LegalChecker([{ name: 'asa', age: 10 }, { name: 'raju', age: 18 }, { name: 'paji', age: 25 }]))