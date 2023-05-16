let arr = [1, 2, 4, 5, 6, 12, 123, 21,2,99,5]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

let i = 0
while (i < arr.length) {
    if ( arr[i] % 2 == 1) {
        console.log(arr[i])
        
    }
    i++
}