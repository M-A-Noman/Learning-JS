var arr = new Array();
for (var i = 0; i < 5; i++)arr[i] = i + 1;
console.log(arr.join(', '));//join the array elements with space it will join by given value as parameter parameter could be any string
arr.fill(2,2,4);//fill the range of the array with the given value fill(value,range start,range end)
console.log(arr);
// var arr2 = arr;//will copy the reference better to use Array.from()method
var arr2 = Array.from(arr);
var arr3 = arr.concat(arr2);
console.log(arr3);
