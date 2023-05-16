type CrushType = {
    name: string,
    age?: number,
    profession: string, // Optional type : property can be present or unpresent
    address: string
};

const crush1: CrushType = {
    name: 'Heartu',
    age: 22,
    profession: 'Developer',
    address: 'Baily Road'
};

const crush2: CrushType = {
    name: 'Pakhu',
    profession: 'Senior Developer',
    address: 'USA'
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string

const courseName: CourseNameType = 'Next Level Web Development'

type OperationType = (x: number, y: number) => number;

const calculate = (
    n1: number,
    n2: number,
    operation: OperationType
) => {
    return operation(n1, n2)
}

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
