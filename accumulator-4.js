let arr = ['Abu', 'Ahmad', 'Mansur', 'Ibrahim', 'Saad', 'Hasan', 'Mansur', 'Ali','Rasul', 'Isa', ]


let accumulator = []


for(let i = 0; i< arr.length; i++) {
    if(arr[i][0] === 'A') {
        accumulator.push(arr[i])
    }
}

console.log(accumulator)
