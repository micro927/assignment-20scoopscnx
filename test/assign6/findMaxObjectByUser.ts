type Person = {
    name: string
    age: number
    salary: number
    children: number
}
type callBackFuntion = (person: Person) => number

export function findMaxObjectByUser(personArray: Person[], callBackFuntion: callBackFuntion): Person {

    const maxPerson = personArray.reduce((maxPerson, person) => {
        return callBackFuntion(person) > callBackFuntion(maxPerson) ? person : maxPerson
    })
    return maxPerson
}