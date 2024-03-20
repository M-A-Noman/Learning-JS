var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var filteredArr = arr.filter( function (value) {
//     return value % 2 == 0;
// })
// console.log(filteredArr);
// own filter method
function MyFilter(arr,cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        var chk = cb(arr[i], i, arr);
        if (chk) newArr.push(arr[i]);
    }
    return newArr;
}
var newArr = MyFilter(arr, function (value) {
    return value%2;
})
console.log(newArr);