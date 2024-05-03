let age: number = 20;
if (age < 50) age += 10;
console.log(age);
let val: number = 20;
let val2 = 20; //both are same in ts we can't assign another thing after declaring one variable to one type
// val2="1ja" // invalid in ts
let val3; //this is type of any which violates the rule of ts. Try to reduce usage of this
val3 = 1;
val3 = "hab"; // both are same as previous js
let arr1: number[] = [1, 2, 3];
let tuple: [number, string] = [1, "jah"]; // using a third parameter is illegal here
// tuple[0]. // will provide all function related to function
// tuple[1]. will show all function related to string

function myFunc(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
myFunc(10_000); // by using default value we can easily use a function with less parameter it's required. In js it's correct to use more and less parameter but in typescript it's prohibited

// let employee: {
//     readonly id: number,//create the id readonly mood. after declaration we can't change it
//     name: string,
//     retire:(date:Date)=>void // we can't use this info for further object we need to repeat the process so we can create a type alias

// } = {
//     id: 1,
//     name:'Noman',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
type Employee =
  // creating type alias
  {
    readonly id: number; //create the id readonly mood. after declaration we can't change it
    name: string;
    retire: (date: Date) => void;
  };
let employee: Employee = {
  id: 1,
  name: "Noman",
  retire: (date: Date) => {
    console.log(date);
  },
};
// union type function
function kgToLbs(weight: number | string): number {
  if (typeof weight == "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// intersection example
type draggable = {
    drag:()=>void
}
type resizable = {
    resize:()=>void
}
type UIWidget = draggable & resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize:()=>{}
}

