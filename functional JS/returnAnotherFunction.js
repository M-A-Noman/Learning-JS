function greet(msg) {
    return function (name) {
        return name + ', ' + msg + '!';
    }
}
var gm = greet('Good morning');
console.log(gm("Noman"));

function power(n) {
    return function (base) {
        var res = 1;
        for (var i = 0; i < n; i++){
            res *= base;
        }
        return res;
    }
}
var power5 = power(5);
console.log(power5(2));
console.log(power5(3));
console.log(power5(4));