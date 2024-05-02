
var Rectangle = function (height, width) {
    var position = {
        x: 10,
        y: 20
    };
    this.height = height;
    this.width = width;
    // by using variable we create abstraction. printProperties function is now available for this function only
    var printProperties = function () {
        console.log("Height of the rectangle is " + this.height);
        console.log("width of the rectangle is " + this.width);
        console.log("Area of the rectangle is", this.width * this.height);
    }.bind(this);
    this.draw=function(){
        console.log("This is a rectangle");
        printProperties();
        console.log("position X: "+position.x+' Y: '+position.y);
    }
    //alternate of getter setter method for accessing private members
    Object.defineProperty(this, 'position', {
        get: function () {
            return position;
        },
        set: function (value) {
            position = value;
        }
    }
    )
}
var rect7 = new Rectangle(40, 30);
rect7.draw();
rect7.position = {
    x: 100,
    y: -20
};
console.log(rect7.position);

// var Rect = new Function('height', 'width', `this.height = height;
// this.width = width;
// this.draw=function(){
//     console.log("This is a rectangle");
//     this.printProperties();
//     console.log(this);
// }
// this.printProperties = function () {
//     console.log("Height of the rectangle is " + this.height);
//     console.log("width of the rectangle is " + this.width);
//     console.log("Area of the rectangle is", this.width * this.height);
// }`);
// var rect5 = new Rect(4, 5);
// rect5.draw();
// console.log(rect5.name, rect5.length);
// function myFunc(c,d) {
//     console.log(this);
//     console.log(this.a + this.b+c+d);
// }
// // myFunc.call({ a: 5, b: 7 },7,5);
// // myFunc.apply({ a: 10, b: 20 }, [10, 20]);
// var testBind = myFunc.bind({ a: 100, b: 200 });//bind is use for just binding the object with some function it will called latter.
// testBind(100, 200);
// var n = 10;
// function changeMe(n) {
//     n += 10;
//     console.log(n);
// }
// changeMe(n);//call by value
// console.log(n);
// var obj = {
//     a: 10,
//     b: 20
// };
// function changeObj(obj)
// {
//     obj.a = obj.a + 10;
//     obj.b = obj.b + 10;
//     console.log(obj);
// }
// changeObj(obj)//call by reference
// console.log(obj);

