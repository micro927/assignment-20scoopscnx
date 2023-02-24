type Person = {
    name: string
    age: number
}
export function findMaxObjectbyAge(personArray: Person[]): Person {
    const maxAgePerson = personArray.reduce((maxAgePerson, person) => {
        return person.age > maxAgePerson.age ? person : maxAgePerson
    })
    return maxAgePerson
}