type Person = {
    name: string
    age: number
}
type PersonArray = Person[]

export function findMaxObjectbyAge(personArray: PersonArray): Person {
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