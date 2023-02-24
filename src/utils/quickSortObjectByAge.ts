
type Person = {
    name: string
    age: number
}
type PersonArray = Person[]

type PartitionOutput = [number[], number, number[]]

export function quickSortObjectByAge(personArray: PersonArray): PersonArray {
    function findPivotArrayIndex(personArray: PersonArray) {
        return Math.round(personArray.length / 2) - 1
    }

    function partition(personArray: PersonArray): PartitionOutput {
        const pivotArrayIndex = findPivotArrayIndex(personArray)
        const pivotAge = personArray[pivotArrayIndex].age
        let leftOfPivotArrayIndex: number[] = []
        let rightOfPivotArrayIndex: number[] = []

        personArray.forEach((person, index) => {
            if (index !== pivotArrayIndex) {
                if (person.age <= pivotAge) {
                    leftOfPivotArrayIndex.push(index)
                }
                else {
                    rightOfPivotArrayIndex.push(index)
                }
            }
        })
        return [leftOfPivotArrayIndex, pivotArrayIndex, rightOfPivotArrayIndex]
    }

    if (personArray.length === 0) {
        return [];
    }
    else if (personArray.length === 1) {
        return personArray
    }

    else {
        const partitionedIndex = partition(personArray)

        const leftPartition = partitionedIndex[0].map(personIndex => personArray[personIndex])
        const leftPartitionSorted = quickSortObjectByAge(leftPartition)

        const pivot = personArray[partitionedIndex[1]]

        const rightPartition = partitionedIndex[2].map(personIndex => personArray[personIndex])
        const rightPartitionSorted = quickSortObjectByAge(rightPartition)

        const result = leftPartitionSorted.concat(pivot, rightPartitionSorted)
        return result
    }
}