// Create a function for finding the highest item from the input array which objects by specified property which user can provide by themself
// (see example input and how the function is used in below gist)
// https://gist.github.com/Elecweb/1477ad2c41b5d6c310feafe4765b3dbf
// // example using function

// // find max by age
// maximum(input, (person) => person.age);

// // find max by salary
// maximum(input, (person) => person.salary);

// // find max by children
// maximum(input, (person) => person.children);

type Person = {
    name: string
    age: number
}
type PersonArray = Person[]

// (input, (person) => person.children);
// (input, callBackfuntion);

export function findMaxObjectByUser(personArray: PersonArray): Person {
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