var a = 'abc BAV';
var b = 'sknf kdd';
var c = a.concat(' ', b);
console.log(c);
console.log(c.substring(3));
console.log(c.toLowerCase());
console.log(c.startsWith('abc'));
console.log(c.endsWith('dd'));
var d = '    kkd     ';
console.log(d.trim());//trim method remove all the whitespace from the beginning and from the ending of the string doesn't update original string 
console.log(c.split('f'));//split function will split the text string into array of words depending upon the parameter. Parameter could be space, comma any character