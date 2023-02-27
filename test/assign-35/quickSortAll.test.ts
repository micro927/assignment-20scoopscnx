import { quickSortAll } from "./quickSortAll";

describe('Assignment #2 : Create a function for finding the highest item from the input array', () => {
    test('My quick sort == Array.sort()', () => {
        const exampleArrayofNumber = [1, 100, 2, 5, 4, 10, 'Apple', 'Banana', 'Mango', 9999];
        expect(quickSortAll(exampleArrayofNumber)).toEqual(exampleArrayofNumber.sort())
    })
    test('Answer should be Doe -> Will -> Mayer -> John -> Smith', () => {
        const input = [
            { name: 'John', age: 60 },
            { name: 'Doe', age: 20 },
            { name: 'Will', age: 40 },
            { name: 'Smith', age: 69 },
            { name: 'Mayer', age: 56 }
        ]
        const expectAnswer = [
            { name: 'Doe', age: 20 },
            { name: 'Will', age: 40 },
            { name: 'Mayer', age: 56 },
            { name: 'John', age: 60 },
            { name: 'Smith', age: 69 }
        ]

        expect(quickSortAll(input)).toEqual(expectAnswer)
    })
})