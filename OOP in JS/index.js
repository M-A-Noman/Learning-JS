// var rect = {
//     height: 10,
//     width: 20,
//     draw: function () {
//         console.log("This is a rectangle object");
//         this.printProperties();
//     },
//     printProperties: function () {
//         console.log("This rectangle has height " + this.height + "\nthis rectangle has width " + this.width);
//     }
// };
// var another = {
//     height: 17,
//     width: 19,
//     print: rect.printProperties
//     // here this method will call the value of height 17 and width 19 because in printProperties method we use this.height and this.width which will get the value at execution context as a result this.height will indicate to this object values.
// };
// rect.draw();
// rect.width = 100;
// rect.draw();
// another.print();

// factory pattern for reuse of code
// var createRect = function (height, width) {
//     return {
//         height: height,
//         width: width,
//         draw: function () {
//             console.log("This is a factory pattern");
//             this.printProperties();
//         },
//         printProperties: function () {
//             console.log("This rectangle has height " + this.height + "\nthis rectangle has width " + this.width);
//             console.log(this);
//         }
//     };
// }
// var rect1 = createRect(10, 20);
// rect1.draw();
// var rect2 = createRect(100, 100);
// rect2.draw();

// constructor pattern for reuse of code
// for constructor pattern we will follow the naming convention that is first letter of the variable will be in capital letter

// var Rectangle = function (height, width) {
//     this.height = height;
//     this.width = width;
//     this.draw = function () {
//         console.log("this is Constructor pattern");
//         this.printProperties();
//     }
//     this.printProperties = function () {
//         console.log("height of the rectangle is " + this.height);
//         console.log("width of the rectangle is " + this.width);
//         console.log(this);
//     }
// }
// var rect3 = new Rectangle(10, 20);
// rect3.draw();

// call method, apply method, bind method
// call apply methods are use for providing and existing object to a function so that the function refer to that object rather than window object.
// function app(c,d) {
//     console.log(this);
//     console.log("A + B = "+Number(this.a + this.b));
//     console.log("A + B + C + D = "+ Number( this.a + this.b+c+d));
    
// }
// app();// this will refer to window object
// app.call({}) // this will refer the empty object

// app.call({ a: 10, b: 20 });
// app.apply({ a: 100, b: 200 });
// // for third console log we need to follow following syntax
// app.call({ a: 10, b: 20 }, 30, 40);
// app.apply({ a: 100, b: 200 }, [10, 20]);

// Bind will not call the function immediately it will just bind the function. Need to call the bind method later. Its best practice to pass the function parameter if there any while calling the binding variable.
// var testBind = app.bind({ a: 120, b: 420 });
// testBind(20,20);
// var Rectangle = function (width, height) {
//     this.width = width;
//     this.height = height;
//     var position = {
//         x: 10,
//         y:-100
//     }
//     // this.getPosition=function() {
//     //     return position;
//     // }
//     Object.defineProperty(this, 'position', {
//         get: function () {
//             return position;
//         },
//         set: function (value) {
//             position=value
//         }
//     })
//     var printProperties = function () {
//         console.log("height = " + this.height, "width = " + this.width);
//     }.bind(this);
//     this.draw = function () {
//         console.log("this is a abstracted rectangle");
//         printProperties();
//         console.log("Position of the rectangle is X: " + position.x, "Y: " + position.y);
//     }
// } 
// var rect4 = new Rectangle(10, 20);
// rect4.draw()
// // getter setter 
// rect4.position = {
//     x: 120,
//     y:-420
// }
// console.log(rect4.position);

// using prototype
var Square = function (width) {
    this.width = width;
    this.getWidth = function () {
        console.log("Width of the square is " + this.width);
        // this.draw(); // calling prototype member from instance 
    }
}
Square.prototype = {
    draw: function () {
        console.log("this is draw from prototype");
        this.getWidth() // calling instance member form prototype 
    }
}
var sqr1 = new Square(10);
var sqr2 = new Square(5);
console.log(sqr1.hasOwnProperty('width'));
console.log(sqr1.hasOwnProperty('getWidth'));
console.log(sqr1.hasOwnProperty('draw')); // checking own property

Object.keys(sqr1); //return own instance property
 
for (i in sqr1) { // return all instance and prototype property
    console.log(i);
}

