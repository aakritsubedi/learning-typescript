// TypeScript infers the type on its own
let fullName = 'Aakrit Subedi';
let email = 'aakritsubedi9@gmail.com';
let age = 24; //we don't use integer for whole no. & float for decimal no.
let isMale = true;

// age = 'Aakrit'; cannot be assigned
age = 25; 

// Explicitly defining the type
let office:string = 'Aakrit Software Technology';
let phoneNo:number = 2070021;
let latitude:number = 28.3949;
let longitude:number = 84.1240;

// Functions
const computeCircumference = (diameter: number) => {
  return diameter * Math.PI;
}

// console.log(computeCircumference('hello')); error
console.log(computeCircumference(10));
console.log(computeCircumference(25.5));