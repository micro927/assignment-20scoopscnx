

function quickSort(arrayOfNumber) {
    arrayOfNumber = arrayOfNumber.map(String) // turn to string for sort by ASCII
    function findPivotArrayIndex(arrayOfNumber) {
        return Math.round(arrayOfNumber.length / 2) - 1
    }

    function partition(arrayOfNumber) {
        const pivotArrayIndex = findPivotArrayIndex(arrayOfNumber)
        const pivot = arrayOfNumber[pivotArrayIndex]
        let leftOfPivotArray = []
        let rightOfPivotArray = []

        arrayOfNumber.forEach((item, index) => {
            if (index !== pivotArrayIndex) {
                if (item <= pivot) {
                    leftOfPivotArray.push(item)
                }
                else {
                    rightOfPivotArray.push(item)
                }
            }
        })

        // const partitionedArray = leftOfPivotArray.concat(arrayOfNumber[pivotArrayIndex], rightOfPivotArray)
        return [leftOfPivotArray, pivot, rightOfPivotArray]
    }
    if (arrayOfNumber.length === 0) {
        return [];
    }
    if (arrayOfNumber.length === 1) {
        return arrayOfNumber
    }

    else {
        const partitioned = partition(arrayOfNumber)
        const leftArray = quickSort(partitioned[0]) //left
        const pivot = partitioned[1]
        const rightArray = quickSort(partitioned[2]) //right
        return (leftArray.concat(pivot, rightArray))
    }
}

// const RandomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
const RandomArray = ['March', 'Jan', 'Feb', 'Dec', 25, 2, 1, 10000];

console.log('my', quickSort(RandomArray).map(item => Math.round(item)))
console.log('origin', (RandomArray.sort()))