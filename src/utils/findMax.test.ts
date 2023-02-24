import { findMax } from "./findMax"

test('Assignment #2 : Create a function for finding the highest item from the input array (expect toEqual with Array Math.max())', () => {
    const exampleArrayofNumber = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    expect(findMax(...exampleArrayofNumber)).toEqual(Math.max(...exampleArrayofNumber))
})