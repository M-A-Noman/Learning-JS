function Shape() {

}
// Shape.prototype = {//reset the prototype it's better to use the system used after inheritance in this code.
//     common: function () {
//         console.log("this is form common");
//     }
// }
Shape.prototype.common = function () {
    console.log("This is from common");
}
function Square(width) {
    this.width = width;
}
Square.prototype = Object.create(Shape.prototype);// inherit shape class object also reset the constructor of the square class. To get back it we should follow following codes
Square.prototype.constructor = Square;
Square.prototype.printWidth = function () {
    console.log("Width of the Square is:", this.width);
};
Square.prototype.draw= function () {
        console.log("This draw");
    }

var sqr = new Square(45);
var shape = new Shape();