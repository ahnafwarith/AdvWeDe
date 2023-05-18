interface ITodo {

    userId: number,
    id: number,
    title: string,
    completed: boolean

}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await response.json()
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo;
    console.log(result)
}

getTodoData();

// Mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data = 'Data peye giyechi'
        if (data) {
            resolve(data)
        }
        else {
            reject('Data to pelam na bhaya')
        }
    })
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        }
        else {
            reject('Data to pelam na bhaya')
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise()
    return data
}

const getPromiseDataBool = async (): Promise<boolean> => {
    const data = await makePromiseBoolean()
    return data
}

// Promise<string> Promise<boolean> Promise<object>