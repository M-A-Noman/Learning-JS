function a() {
     b();
    console.log('function a');
}
function b() {
    c();
    console.log('function b');
}
function d() {
    console.log('function d');
}
function c() {
    d();
    console.log('function c');
}
var x = 10;
a();
console.log('global context');