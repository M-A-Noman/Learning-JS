// currying means one function will handle only one parameter if we need to process multiple argument then we need to return another function to process that argument.
function currying(a) {
    // in this section we will process the parameter a
    return function (b) {
        // in this scope we will process the parameter b
        return function (c) {
            // in this scope we will process the parameter c
            // as this is our last section so we will process all parameter and return the result in this section also
            return a + b + c;
        }
    }
}
var res = currying(10)(20)(30)//first one as a second one as b and third one as c of currying parameter
console.log(res);