// datatypes
// Boolean, null, undefined, Number, String, Symbol, Object
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));
