// Generic type in Typescript
type GenericArray<T> = Array<T>;

type GenericTuple<X, Y> = [X, Y];

const relationship: GenericTuple<string, string> = ['Jack', 'Rose'];

const sugardaddy: GenericTuple<Sugarship, string> = [
    {
        name: 'Persian',
        salary: 950000
    },
    'Rose'
]

interface Sugarship {
    name: string,
    salary: number
}

// =========================
const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ['44', '12', '4']
const rollBoolean: GenericArray<boolean> = [true, false]
const userNameAndRollNumber: GenericArray<{ name: string; roll: number }> = [
    {
        name: 'Ahnaf',
        roll: 22101802
    },
    {
        name: 'Wais',
        roll: 21201294
    }
]