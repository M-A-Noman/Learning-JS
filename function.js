var add = function (a, b) {
    return a + b;
}//function expression or anonymous function
var a = add(10, 3);
console.log(a);
setTimeout(function () {
    console.log("Called after 2 seconds")
}, 2000);//async function will execute later rest of the code will execute first then when code complete then it will execute
// inner function
function outerFunction(greet,name) {
    function getFirstName() {
        return name.split(' ')[0];
    }
    var message = greet + ' ' + getFirstName();
    console.log(message);

}
function abx() {
    console.log('hello')
    outerFunction('ksdk', 'ak aksn askjk');
    console.log('skdksj')
}
// outerFunction('Welcome', 'Md Abu Noman');
abx();
console.log('aksjdka')
