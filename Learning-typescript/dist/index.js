"use strict";
var age = 20;
if (age < 50)
    age += 10;
console.log(age);
var val = 20;
var val2 = 20;
var val3;
val3 = 1;
val3 = "hab";
var arr1 = [1, 2, 3];
var tuple = [1, "jah"];
function myFunc(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
myFunc(10000);
var employee = {
    id: 1,
    name: "Noman",
    retire: function (date) {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight == "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map