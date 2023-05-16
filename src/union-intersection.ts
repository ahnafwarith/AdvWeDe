// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }

type NoobDev = {
    name: string
};

// Intersection
type JuniorDev = NoobDev & {
    name: string,
    expertise: string,
    experience: number
};

type NextLevelDev = JuniorDev & {
    leader: true
}

// Union
const newDev: NoobDev | JuniorDev = {
    name: 'Moznu',
    expertise: 'Java',
    experience: 1,
}

const developer: NextLevelDev = {
    name: 'Kontu',
    expertise: 'typescript',
    experience: 4,
    leader: true,
};