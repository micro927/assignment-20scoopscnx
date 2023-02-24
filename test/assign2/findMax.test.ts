import { findMax } from "./findMax"

describe('Assignment #2 : Create a function for finding the highest item from the input array', () => {
    test('My find max == Math.max()', () => {
        const exampleArrayofNumber = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        expect(findMax(...exampleArrayofNumber)).toEqual(Math.max(...exampleArrayofNumber))
    })
})