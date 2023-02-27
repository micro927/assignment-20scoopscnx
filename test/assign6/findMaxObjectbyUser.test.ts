import { findMaxObjectByUser } from "./findMaxObjectByUser";

const input = [
    { name: 'John', age: 60, salary: 50000, children: 3 },
    { name: 'Doe', age: 20, salary: 30000, children: 2 },
    { name: 'Will', age: 40, salary: 20000, children: 1 },
    { name: 'Smith', age: 69, salary: 25000, children: 0 },
    { name: 'Mayer', age: 56, salary: 60000, children: 1 }
]

describe(`Assignment #6 : Create a function for finding the highest item from the input array which objects by specified property which user can provide by themself (age = smith,salary = mayer,children = john)`, () => {

    test('find Max Age', () => {
        const expectAnswerforAge = input[3] // smith
        expect(findMaxObjectByUser(input, (person) => person.age)).toEqual(expectAnswerforAge)
    })
    test('find Max Salary', () => {
        const expectAnswerforSalary = input[4] // mayer
        expect(findMaxObjectByUser(input, (person) => person.salary)).toEqual(expectAnswerforSalary)
    })
    test('find Max Children', () => {
        const expectAnswerforChildren = input[0] // john
        expect(findMaxObjectByUser(input, (person) => person.children)).toEqual(expectAnswerforChildren)
    })

})