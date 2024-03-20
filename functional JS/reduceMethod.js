var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// var sum = arr.reduce(function (pre, cur) {
//     return pre + cur;
// })
// var max = arr.reduce(function (pre, cur) {
//     return Math.max(pre, cur);
// })
// console.log(sum, max);
// own reduce method

function MyReduce(arr,cb,acc=0) {
   
    for (var i = 0; i < arr.length; i++){
        acc = cb(acc, arr[i]);
    }
    return acc;
}
var sum = MyReduce(arr, function (pre, cur) {
    return Math.max(pre,cur);
},0)
console.log(sum);
