export function findMax(...input: number[]): number {
    const inputarray = [...input]
    const max = inputarray.reduce((max, item) => {
        return item > max ? item : max
    })
    return max
}