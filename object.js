// var obj1 = {
//     x: 10,
//     y: 20
// };//declare object with literal
// obj1.z = 30;
// console.log(obj1);
// var obj2 = Object();//declare object with constructor new keyword could be used
// obj2.a = 10;
// console.log(obj2);

// accessing the the object
// console.log(obj1.x)//using dot notation
// console.log(obj1['x']);//using array notation
// usually used the dot notation but for user input to find in an object array notation is used
// var abc = 'x';
// console.log(obj1[abc]);

// modify object
// obj1.a = 100;
// obj1[abc] = 200;
// console.log(obj1);

// remove any element from object
// delete obj1.a;
// console.log(obj1);

// comparing two objects
var obj1 = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e:50
}
var obj2 = {
    a: 10,
    b: 20,
    x: 30,
    y: 60,
    z:70
}
// console.log(obj1.a === obj2.a && obj1.b === obj2.b);//comparing full object
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));// convert object into strings

// iterate over objects
// using for in loop
// for (var key in obj1) {
//     console.log(key + ': ' + obj1[key]);
// }

// built in methods of objects
console.log(Object.keys(obj1));//return an arrays of keys
console.log(Object.values(obj2));// return an arrays of values
console.log(Object.entries(obj1))// return an 2 dimensional array containing the key and values
var obj3 = Object.assign({}, obj1);//clone the an object
obj3.a = 100;
console.log(obj3);

