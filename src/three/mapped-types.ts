const arrayOfNumbers = [1, 2, 3, 4];
const arrayOfStrings = arrayOfNumbers.map(number => number.toString())

type AreaNumber = {
    height: number;
    width: number
}

type AreaString = {
    height: string,
    width: string
}

type AreaReadOnly = {
    readonly height: 10,
    readonly width: 12
}

type A = AreaNumber['height'] // lookup type
type B = keyof AreaNumber; // 'width' | height