// TypeScript infers the type on its own
let fullName = "Aakrit Subedi";
let email = "aakritsubedi9@gmail.com";
let age = 24; //we don't use integer for whole no. & float for decimal no.
let isMale = true;

// age = 'Aakrit'; cannot be assigned
age = 25;

// Explicitly defining the type
let office: string = "Aakrit Software Technology";
let phoneNo: number = 2070021;
let latitude: number = 28.3949;
let longitude: number = 84.124;
let isActive: boolean = false;

// Any type
let x: any = "Hello World!!";

// Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
ids.push(9);
ids.push(10);
// ids.push('11'); Error: String is not assignable

// Tuples
let person: [number, string, boolean] = [1, "Aakrit Subedi", false];

let employee: [number, string][];

employee = [[1, "Aakrit Subedi"]];
employee.push([2, "John Doe"]);

// Union
let employeeId: string | number;

employeeId = 1;
employeeId = "12569-65986-15584";

// Enum
enum GENDER {
  MALE,
  FEMALE,
  OTHERS,
}
console.log(GENDER.MALE); // 0

enum STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",
  PENDING = "PENDING",
}
console.log(STATUS.ACTIVE); // ACTIVE

// Objects
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const user: User = {
  id: 512,
  name: "Aakrit Subedi",
  isActive: false,
};

// Type Assertion
let customerId: any = 12354;
let studentId = <number>12599;
let doctorId = 126 as number;

// studentId = true; Error assigning boolean value
console.log(doctorId);
// doctorId = '125647; Error assigning string value

// Functions
const computeCircumference = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(computeCircumference('hello')); error
console.log(computeCircumference(10));
console.log(computeCircumference(25.5));

const addNumber = (firstNo: number, secondNo: number): number => {
  return firstNo + secondNo;
};

console.log(addNumber(25, 95));

const greetings = (code: number | string) : void => {
  console.log(`Hello ${code}`);
}

greetings(22569512);
greetings('aakrit-subedi');
// greetings(fasle); Error
