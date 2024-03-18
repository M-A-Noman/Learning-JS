var arr = [];//declare array in js
var i;
for (i = 1; i <= 5; i++){
    arr[i - 1] = i * i;
}
arr.push(i * i);//insert an element at the last of the array
i++;
arr.unshift(i * i);//insert an element at the very beginning of the array
i++;
arr.splice(3, 0, i * i, i + 2);//splice (position, number of element we want to delete,value to be inserted,value to be inserted.....) there could be one or many value that could be add in the array

arr.pop()//remove last element of the array;
console.log(arr);
arr.shift();//remove first element of the array
console.log(arr);
arr.splice(3,1)//remove number starting from index 3 on the basis of number of element we want to delete this method will delete the numbers
for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

