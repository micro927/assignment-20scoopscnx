import { mySort } from "./mySort";

test('test jest', () => {
    const exampleNumberArray = [2, 3]
    const exampleNumberString = exampleNumberArray.toString()
    console.log(exampleNumberString)
    expect(mySort(exampleNumberArray)).toBe(exampleNumberArray.sort())
})