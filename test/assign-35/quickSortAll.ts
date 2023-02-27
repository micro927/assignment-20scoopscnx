
type Person = {
    name: string
    age: number
}
// type PartitionOutput = [Person[], Person, Person[]]

export function quickSortAll(personArray: any[]): any[] {

    function isPersonArray(inputArray: Person[] | string[]): inputArray is Person[] {
        return true;
    }
    function numericStringtoNumber(string: string | number): string | number {
        return Number(string) ? Number(string) : string
    }


    function partition(inputArray: any[]): [any[], any, any[]] {
        const stringInputArray = inputArray.map(String)
        const pivotArrayIndex = Math.round(stringInputArray.length / 2) - 1
        const pivot = stringInputArray[pivotArrayIndex]
        const leftOfPivotArray: any[] = stringInputArray.filter((item, index) => index !== pivotArrayIndex && item <= pivot).map(item => numericStringtoNumber(item))
        const rightOfPivotArray: any[] = stringInputArray.filter((item, index) => index !== pivotArrayIndex && item > pivot).map(item => numericStringtoNumber(item))
        return [leftOfPivotArray, numericStringtoNumber(pivot), rightOfPivotArray]
    }

    function partitionPerson(personArray: Person[]): [Person[], Person, Person[]] {
        const pivotArrayIndex = Math.round(personArray.length / 2) - 1
        const pivotPerson = personArray[pivotArrayIndex]
        const pivotAge = pivotPerson.age

        const leftOfPivotArray: Person[] = personArray.filter((person, index) => index !== pivotArrayIndex && person.age <= pivotAge)
        const rightOfPivotArray: Person[] = personArray.filter((person, index) => index !== pivotArrayIndex && person.age > pivotAge)

        return [leftOfPivotArray, pivotPerson, rightOfPivotArray]
    }

    if (personArray.length === 0) {
        return [];
    }
    else {
        let partitioned: any[]
        if (typeof personArray[0] === "object") { ///////
            partitioned = partitionPerson(personArray)
        }
        else {
            partitioned = partition(personArray)
        }
        const leftPartitionSorted = quickSortAll(partitioned[0])
        const pivot = partitioned[1]
        const rightPartitionSorted = quickSortAll(partitioned[2])
        const result = leftPartitionSorted.concat(pivot, rightPartitionSorted)
        return result
    }
}