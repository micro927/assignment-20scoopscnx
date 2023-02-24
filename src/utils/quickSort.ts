
type InputArray = Array<string | number>
type OutputArray = Array<string | number>
type ArrayofString = string[]
type PartitionOutput = [ArrayofString, string, ArrayofString]
type NumericStringtoNumberOutput = string | number

export function quickSort(inputArray: InputArray): OutputArray {
    function findPivotArrayIndex(stringInputArray: ArrayofString) {
        return Math.round(stringInputArray.length / 2) - 1
    }

    function partition(stringInputArray: ArrayofString): PartitionOutput {
        const pivotArrayIndex = findPivotArrayIndex(stringInputArray)
        const pivot = stringInputArray[pivotArrayIndex]
        let leftOfPivotArray: ArrayofString = []
        let rightOfPivotArray: ArrayofString = []

        stringInputArray.forEach((item, index) => {
            if (index !== pivotArrayIndex) {
                if (item <= pivot) {
                    leftOfPivotArray.push(item)
                }
                else {
                    rightOfPivotArray.push(item)
                }
            }
        })
        return [leftOfPivotArray, pivot, rightOfPivotArray]
    }

    function numericStringtoNumber(string: string | number): NumericStringtoNumberOutput {
        return Number(string) ? Number(string) : string
    }

    const stringInputArray = inputArray.map(String) // Sort by ASCII index (like array.sort())

    if (stringInputArray.length === 0) {
        return [];
    }
    if (stringInputArray.length === 1) {
        return [numericStringtoNumber(stringInputArray[0])]
    }

    else {
        const partitioned = partition(stringInputArray)
        const leftArray = quickSort(partitioned[0]) //left
        const pivot = partitioned[1]
        const rightArray = quickSort(partitioned[2]) //right
        const result = leftArray.concat(pivot, rightArray)
        return result.map(item => numericStringtoNumber(item))
    }
}