var a = 10;

var b;

console.log(a);

console.log(b);

b = 20;

console.log(c);

var c = 50;

// in creation phase js engine will first declare the variable
// in our example it will declare the variables like following
// a=undefined
// b = undefined
// escape console.log() because its an executional statement
// define c=undefine
// completion of creation phase
//  in executional phase it first assign variable a=10
// then escape all creation phase statement
// then it execute the console.log()s as the value assigned to it
// so the output will be 10 undefined undefined
// and at last it will assign b=20 and c=50

abc();
function abc() {
    console.log('function');
}
abc();

// for function js engine store the reference of the function at the creation stage and then so we can use a function from everywhere of the code while declare doesn't matter for it
// in creation phase abs = reference of the function will be stored so 
// so in executional phase the reference of the function will be call so there will be no incorrect or undefined output for function

