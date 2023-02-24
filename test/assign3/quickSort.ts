
type InputArray = Array<string | number>
type OutputArray = Array<string | number>
type PartitionOutput = [string[], string, string[]]
type NumericStringtoNumberOutput = string | number

// Sort by ASCII code like array.sort()
export function quickSort(inputArray: InputArray): OutputArray {
    function findPivotArrayIndex(stringInputArray: string[]) {
        return Math.round(stringInputArray.length / 2) - 1
    }

    function partition(stringInputArray: string[]): PartitionOutput {
        const pivotArrayIndex = findPivotArrayIndex(stringInputArray)
        const pivot = stringInputArray[pivotArrayIndex]
        const leftOfPivotArray: string[] = stringInputArray.filter((item, index) => index !== pivotArrayIndex && item <= pivot)
        const rightOfPivotArray: string[] = stringInputArray.filter((item, index) => index !== pivotArrayIndex && item > pivot)
        return [leftOfPivotArray, pivot, rightOfPivotArray]
    }

    function numericStringtoNumber(string: string | number): NumericStringtoNumberOutput {
        return Number(string) ? Number(string) : string
    }

    const stringInputArray = inputArray.map(String)

    if (stringInputArray.length === 0) {
        return [];
    }
    else {
        const partitioned = partition(stringInputArray)
        const leftArray = quickSort(partitioned[0])
        const pivot = partitioned[1]
        const rightArray = quickSort(partitioned[2]
        )
        const result = (leftArray.concat(pivot, rightArray)).map(item => numericStringtoNumber(item))
        return result
    }
}