export function findMax(...input: number[]): number {
    const inputarray = [...input]
    let winner = inputarray[0]
    inputarray.map(item => {
        winner = item > winner ? item : winner
    })
    return winner
}