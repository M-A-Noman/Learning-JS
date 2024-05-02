// for reusability
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
//    Child.prototype = Object.create(Parent.prototype);//inheriting properties of parent
    //    Child.prototype.constructor = Child; //Resetting Square prototypes 
    Child.prototype.constructor = Child;
}
function Shape(color) {
    this.color = color;
}
Shape.prototype = {
    common: function () {
        console.log('This is common function for all');
    }
}
function Square(width,color) { 
    Shape.call(this,color)//call the base class constructor
    this.width = width;
}
extend(Shape, Square);
Square.prototype.common = function () {
    Shape.prototype.common.call(this);//calling base class function
    console.log("This function is overridden");//function overriding
}

const newPrototype = {
    draw: function () {
        console.log("This is draw method");
    },
    toString: function () {
        return 'My width is ' + this.width;
    }
}//creating multiple prototype properties
Object.assign(Square.prototype, newPrototype);// assigning multiple properties to square 


var sqr1 = new Square(5,'green');
var sqr2 = new Square(10,'red');
  