function numericStringtoNumber(string) {
    return Number(string) ? Number(string) : string
}

const a = "asdsa"

console.log(typeof numericStringtoNumber(a))