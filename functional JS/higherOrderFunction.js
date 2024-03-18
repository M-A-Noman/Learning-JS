function add(a, b) {
    return a + b;
}
function manipulate(a, b, func) {
    var c = a + b;
    var d = a - b;
    // function multiply() {
    //     var e = func(a,b);
    //     return c * d * e;
    // }
    // return multiply;
    return function () {
        var e = func(a,b);
        return c * d * e;
    }
}
var mul = manipulate(7, 4, add);
console.log(mul);
console.log(mul());
