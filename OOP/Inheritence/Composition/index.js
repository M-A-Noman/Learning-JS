var canWalk = {
    walk: function () {
        console.log("Walking...");
    }
}
var canSwim = {
    swim: function () {
        console.log("Swimming...");
    }
}
var canEat = {
    eat: function () {
        console.log("Eating...");
    }
}
function mixing(target, ...sources) {
    Object.assign(target, ...sources);
}
function Person(name) {
    this.name = name;
}
mixing(Person.prototype, canEat, canWalk);
function Fish(name) {
    this.name = name;
}
mixing(Fish.prototype, canSwim, canEat);
var person1 = new Person("M A Noman");
var goldFish = new Fish("Gold Fish");

