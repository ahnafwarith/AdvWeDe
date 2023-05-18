let lol: any;

lol = 'next level web development';

(lol as string).length;


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        return `The converted value is ${parseFloat(param) * 1000} gram`
    }
    if (typeof param === 'number') {
        return param * 1000
    }
}

const resNumber = <number>kgToGram(10);
const resStr = kgToGram('100') as string;

type CustomErrorType = {
    message: string
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message)
}