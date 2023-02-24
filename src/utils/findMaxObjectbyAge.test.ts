import { findMaxObjectbyAge } from "./findMaxObjectbyAge";

test('Assignment #4 : Create a function for finding the highest item from the input array which it’s object by age (Answer should be Smith (age:69))', () => {
    const input = [
        { name: 'John', age: 60 },
        { name: 'Doe', age: 20 },
        { name: 'Will', age: 40 },
        { name: 'Smith', age: 69 },
        { name: 'Mayer', age: 56 }
    ]
    const expectAnswer = { name: 'Smith', age: 69 }
    expect(findMaxObjectbyAge(input)).toEqual(expectAnswer)
})