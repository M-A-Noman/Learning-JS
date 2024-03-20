// function composition means passing one function output to another function input parameter 

function print(inp) {
    console.log(inp);
}

function multipleByTwo(n) {
    return n * 2;
}
function add(a, b) {
    return a + b;
}
print(multipleByTwo(add(10, 5)));