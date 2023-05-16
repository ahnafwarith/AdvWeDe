const searchName = (value: string) => {
    if (value === null) {
        console.log('No search material')
    }
    else {
        console.log('searching')
    }
}

// km/h --> m/s
const carSpeed = (speed: unknown) => {
    if (typeof speed == 'number') {
        const newSpeed = (speed * 1000) / 3600
        console.log(newSpeed)
    }

    if (typeof speed == 'string') {
        const [value, unit] = speed.split(' ');

        const newSpeed = (parseFloat(value) * 1000) / 3600
        console.log(`speed in m/s is ${value}`)
    }

    else {
        console.log('unknown')
    }
}

carSpeed(10)
carSpeed('10 kmh^-1')

function throwError(message: string): never {
    throw new Error(message)
}