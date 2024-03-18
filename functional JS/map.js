var arr = [1, 2, 3, 4];
// var sqrArr = arr.map(function (value, index, arr) {
//     return value * value;//map function return an array where foreach modify original array;
// })
// console.log(sqrArr);
// own map
function MyMap(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        var tem = cb(arr[i], index = i, arr = arr);
        newArr.push(tem);
    }
    return newArr;
}
console.log(MyMap(arr, function (value, index, arr) {
    return value * value;
}))