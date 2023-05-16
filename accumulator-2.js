let arr = [-1, -2, 4, 5, 6, -12, 123, 21,2,99,5]

let accumulator = 0
let i = 0

while (i < arr.length) {
    if(arr[i] > 0) {
        accumulator += arr[i]
    }
    i++
}

console.log(accumulator)