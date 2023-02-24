export function sortByAge(personArray) {

    const personIndexArray = personArray.map(item, index => {
        return item.age
    })

    let winner = {
        index: 0,
        age: personArray[0]?.age ?? 0
    }

    personArray.map((person, index) => {
        if (person.age > winner.age) {
            winner.index = index
            winner.age = person.age
        }
    })
    return personArray[winner.index]
}

const input = [
    {
        name: 'John',
        age: 60
    },
    {
        name: 'Doe',
        age: 20
    },
    {
        name: 'Will',
        age: 40
    },
    {
        name: 'Smith',
        age: 69
    },
    {
        name: 'Mayer',
        age: 56
    }
]

console.log(typeof findMaxByAge(input))