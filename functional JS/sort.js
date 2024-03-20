var person = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 22
    },
    {
        name: 'D',
        age: 42
    }
];
var arr = [3, 1, 2, -3, 1, -5, 0, 17, 8, -8, 9];
arr.sort(function (a, b) {
    if (a > b) return 1;//return -1 in this and 1 in next section will sort the array in descending order
    else if (a < b) return -1;
    else return 0;
})
person.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else return 0;
})
console.log(person);

var res1 = arr.every(function (value) {
    return value % 2 == 0;
});
console.log(res1);
var res2 = arr.every(function (value) {
    return value >= 0;
});
console.log(res2);
var res3 = arr.some(function (value) {
    return value % 2 == 0;
});
console.log(res3);
var res4 = arr.some(function (value) {
    return value >= 0;
});
console.log(res4);
var arr1 = [2, 4, 6, 8];
// every method implementation
function myEvery(arr,cb) {
    var feedback = true;
    for (key in arr) {
        // console.log(value,cb(value));
        feedback = feedback & cb(arr[key]);
    }
    return Boolean(feedback);   
}
var test = arr1.every(function (value) {
    return value % 2 == 0;
})
var res5 = myEvery(arr1, function (value) {
    return value % 2 == 0;
})
console.log(res5);

// some method implementation
function mySome(arr, cb) {
    var feedback = false;
    for (key in arr) {
        feedback |= cb(arr[key]);
    }
    return Boolean(feedback);
}
var res6 = mySome(arr1, function (value) {
    return value > 0;
});
console.log(res6);


