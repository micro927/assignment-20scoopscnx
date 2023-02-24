import { quickSort } from "./quickSort";

describe('Assignment #3 : Create function for sorting array', () => {
    test('My quick sort == Array.sort()', () => {
        const exampleArrayofNumber = [1, 100, 2, 5, 4, 10, 'Apple', 'Banana', 'Mango', 9999];
        expect(quickSort(exampleArrayofNumber)).toEqual(exampleArrayofNumber.sort())
    })
})