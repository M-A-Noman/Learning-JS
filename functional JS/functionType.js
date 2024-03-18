// pure function
//1. give same output for same arguments
//2. It does not cause any observable side effect
// function sqr( n) {//this is a pure function
//     return n * n;
// }
// console.log(sqr(5));
// console.log(sqr(7));
// var n = 10;
// function change() {
//     n = 100;//this is not a pure function as it has side effect it change the value of n
// }
// console.log(n)
// var point = {
//     x: 10,
//     y:20
// }
// function printPoint(point) {//this is also has side effect it's change the point object
//     point.x = 100;
//     point.y = 200;
//     console.log(point);
// }
// printPoint(point);
// console.log(point);

//First class function
// maintain following six rules

// 1. function could be stored in a variable
function add(a, b) {
    return a + b;
}
var sum = add;
console.log(sum(1, 3));

// 2. function could be stored in a array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](3, 6));
// 3. function could be stored in a object
var obj = {
    sum: add
};
console.log(obj);
console.log(obj.sum(11, 23));
// 4. we can create function as need
setTimeout(function () {
    console.log('A Function Just created ... ... ...')
},500)
// 5. we can pass function as argument
// 6. we can return function from another function
// if the function follow last two rules then it's called as higher order function
