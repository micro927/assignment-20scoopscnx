
type Person = {
    name: string
    age: number
}
type PartitionOutput = [Person[], Person, Person[]]

export function quickSortObjectByAge(personArray: Person[]): Person[] {
    
    function findPivotArrayIndex(personArray: Person[]) {
        return Math.round(personArray.length / 2) - 1
    }

    function partition(personArray: Person[]): PartitionOutput {
        const pivotArrayIndex = findPivotArrayIndex(personArray)
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
        const partitioned = partition(personArray)
        const leftPartitionSorted = quickSortObjectByAge(partitioned[0])
        const pivot = partitioned[1]
        const rightPartitionSorted = quickSortObjectByAge(partitioned[2])

        const result = leftPartitionSorted.concat(pivot, rightPartitionSorted)
        return result
    }
}