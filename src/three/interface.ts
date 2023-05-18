type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
};

// Use interface when dealing with object type data

interface IExtendedUser extends IUser {
    role: string;
}

type rollNumber = number;

// Using type alias for function

type addNumbersType = (num1: number, num2: number) => number

// Using interface for function

// interface IAddNumbers {
//     (num1: number, num2: number): number;
// }

type rollNumbersType = number[]

interface IRollNumbers {
    [index: number]: number
}

const rollNumber: IRollNumbers = [1, 4, 5, 10]

const addNumbers = (num1: number, num2: number): number => num1 + num2;


const user: IExtendedUser = {
    name: 'Omanush',
    age: 2000,
    role: 'Unknown',
}

const userWithTypeAlias: User = {
    name: 'type alias',
    age: 100,
};

const userWithInterface: IUser = {
    name: 'Interface',
    age: 100,
};
