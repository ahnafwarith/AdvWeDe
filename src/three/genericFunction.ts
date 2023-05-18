type Name = {
    name: string
}

// Arrow Function
const createArray = <T>(param: T): T[] => {
    return [param]
};

const createTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2]
};

const createArrayS = (param: string): string[] => {
    return [param]
};

// ================

const resultTup = createTuple<boolean, string[]>(false, ['USA'])

const result1 = createArray<string>('Bangladesh')

const result2 = createArray<boolean>(true)

const result3 = createTuple<Name, string>({ name: 'Bang' }, 'Ladesh')

// Spread Operator

const crush = 'Kate'

const infoPersian = {
    name: 'X',
    age: 1000
}

// const newPersian = {
//     ...infoPersian, crush
// }

const persianConverter = <T>(param: T) => {
    const crush = "Kate";
    const newData = { ...infoPersian, crush }
    return newData
}

const result5 = persianConverter(infoPersian)