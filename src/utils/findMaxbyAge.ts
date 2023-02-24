type person = {
    name: string
    age: number
}
type personArray = person[]

export function findMaxByAge(personArray: personArray): person {
    let winner = {
        index: 0,
        age: personArray[0].age
    }
    personArray.map((person, index) => {
        if (person.age > winner.age) {
            winner.index = index
            winner.age = person.age
        }
    })
    return personArray[winner.index]
}