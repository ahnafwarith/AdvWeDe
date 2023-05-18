type Person = {
    name: string,
    age: number,
    address: string
}

type newType = 'name' | 'age' | 'address' // manual

// Key operator
type newTypeUsingKeyOf = keyof Person

// const a: newType = 'age'
// const b: newTypeUsingKeyOf = 'name'

// function getProperty(object: object, age: string): {

// }