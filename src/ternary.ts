// ternary operator

const age: number = 22

// if (age > 18) {
//     console.log('Yes')
// }
// else {
//     console.log('No')
// }


const isAdult = age >= 18 ? 'yes' : 'no';

const isAuthenticatedUser = null
const userName = isAuthenticatedUser ?? 'Guest'