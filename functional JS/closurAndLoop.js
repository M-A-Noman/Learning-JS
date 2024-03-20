// for (var i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     },i*1000)
//}
//in this case the loop complete it's all action and the settimeout method waited so all the time the loop execute first then it's showing the settimeout methods output

// to overcome this problem we can us ife method of javascript when we need extra scope for our need we will use the ife method

for (var i = 1; i <= 5; i++){
    (function (n) {
        setTimeout(function () {
            console.log(n);
        }, n * 1000);
    })(i);// here we can use i instead of n in the ife function the structure is function(input parameter){
            // codes
    // }(input parameter)
}