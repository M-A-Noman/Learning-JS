var arr = [];
var i, j;
for (i = 0; i < 5; i++){
    var tem = [];
    for (j = 1; j <= 5; j++){
       tem.push(j * j + i);
    }
    arr.push(tem);
}
for (i = 0; i < 5; i++){
    console.log(arr[i]);
}