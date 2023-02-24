

export function quickSortObjectByAge(inputArray) {
    function findPivotArrayIndex(inputArray) {
        return Math.round(inputArray.length / 2) - 1
    }

    function partition(inputArray) {
        const pivotArrayIndex = findPivotArrayIndex(inputArray)
        const pivotAge = inputArray[pivotArrayIndex].age
        let leftOfPivotArrayIndex = []
        let rightOfPivotArrayIndex = []

        inputArray.forEach((person, index) => {
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

    // const inputArray = inputArray.map(String) // Sort by ASCII index (like array.sort())

    if (inputArray.length === 0) {
        return [];
    }
    if (inputArray.length === 1) {
        return inputArray
    }

    else {
        const partitionedIndex = partition(inputArray)

        const leftPartition = partitionedIndex[0].map(personIndex => inputArray[personIndex])
        const leftPartitionSorted = quickSortObjectByAge(leftPartition)

        const pivot = inputArray[partitionedIndex[1]]

        const rightPartition = partitionedIndex[2].map(personIndex => inputArray[personIndex])
        const rightPartitionSorted = quickSortObjectByAge(rightPartition)

        const result = leftPartitionSorted.concat(pivot, rightPartitionSorted)
        return result
    }
}


const input = [
    { name: 'John', age: 60 },
    { name: 'Doe', age: 20 },
    { name: 'Will', age: 40 },
    { name: 'Smith', age: 69 },
    { name: 'Xmith', age: 30 },
    { name: 'Ymith', age: 15 },
    { name: 'Gmith', age: 99 },
    { name: 'Hmith', age: 87 },
    { name: 'Imith', age: 25 },
    { name: 'Omith', age: 48 },
    { name: 'Mayer', age: 56 }
]

console.log(quickSortObjectByAge(input))