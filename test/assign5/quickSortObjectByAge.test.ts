import { quickSortObjectByAge } from "./quickSortObjectByAge"

describe('Assignment #5 : Create function for sorting item from input array which objects by age)', () => {
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

        expect(quickSortObjectByAge(input)).toEqual(expectAnswer)
    })
})