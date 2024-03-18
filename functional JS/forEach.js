var arr = [1, 2, 3, 4, 5];
// arr.forEach(function (value,index,arr) {
//     console.log('Value at index ' + index + ' is ' + value);
// })
// own forEach
function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++){
        cb(arr[i], index=i, arr=arr);
    }
}
forEach(arr, function (value,index,arr) {
    console.log(value,index,arr);
})
forEach(arr, function (value, index, arr) {
    arr[index] += 5;
})

console.log(arr);