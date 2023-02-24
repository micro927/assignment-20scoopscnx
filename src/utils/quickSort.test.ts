import { quickSort } from "./quickSort";

test('Assignment #3 : Create function for sorting array (expect toEqual with Array.sort() )', () => {
    const exampleArrayofNumber = [40, 100, 1, 5, 25, 10,'A','Z','AZZZ'];
    expect(quickSort(exampleArrayofNumber)).toEqual(exampleArrayofNumber.sort())
})