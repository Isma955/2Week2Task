let arr = [1, 2, 4, 5, 6, 12, 123, 21,2,99,5]

let accumulatorEven = []

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        accumulatorEven.push(arr[i])
    }
}
console.log(accumulatorEven)