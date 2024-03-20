var a = 100;
// newPrint(45);
print(10);
var newPrint = print;
function print(a) {
    console.log(a);
}
print(a);
newPrint(45);
// creational phase
// a=undefined
// newPrint=undefined
// print=reference

// executional phase
// a=100;
// undefined call as function will show error because newPrint is a function expression and we can't able to call function expression before it's initialization. but function declaration or normal function can be declared from any where of the code.  
// if handle that error then
// print(10)with print reference
// newPrint= reference
// rest of the function calls