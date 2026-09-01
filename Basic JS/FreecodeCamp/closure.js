// const add = (() => {
//   let counter = 0;
//   console.log("from outer function", counter);
//   return () => {
//     counter++;
//     console.log("call form inner function");
//     return counter;
//   };
// })();
// add();
// add();
// console.log(add());

let add = () => {
  let counter = 0;
  let plus = () => {
    counter += 1;
  };
  return counter;
};
add();
add();
console.log(add());
