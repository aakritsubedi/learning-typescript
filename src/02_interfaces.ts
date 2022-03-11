// Interfaces
interface IUser {
  id: number;
  name: string;
  email: string;
}

const myInfo = {
  id: 1,
  name: "Aakrit Subedi",
  email: "aakrit-subedi@gmail.com",
};

// Types VS Interface
type ids = number | string;
let myId: ids = 1;
myId = "12569-956698-33225";

// Interface cannot be used primitives or union
// interface otherId = number | string; Error

// Option Properties
interface IStudent {
  id: number;
  name: string;
  age?: number;
}

const studentInfo = {
  id: 125,
  name: "Random Nepali",
  age: 29,
};

// Age is optional parameter
const anotherStudent = {
  id: 1256,
  name: "James Shrestha",
};

// Read Only
interface IEmployee {
  readonly id: number;
  name: string;
}

const employeeInfo: IEmployee = {
  id: 1256,
  name: "Hari Bahadur",
};

// employeeInfo.id = 125669; Error: Cannot change read-only property
employeeInfo.name = "Madan Bahadur";

// Interface with functions
interface MathFunction {
  (x: number, y: number): number;
}

const addNo: MathFunction = (x: number, y: number): number => {
  return x + y;
};

const subtractNo: MathFunction = (x: number, y: number): number => {
  return x - y;
};

interface ISquareFunction {
  (x: number): number;
}

const squareNo: ISquareFunction = (x: number): number => {
  return x * x;
};

// Create patient interface
type PatientId = number | string;

interface IBMIFunction {
  (weight: number, height: number): number;
}

interface IPatient {
  id: PatientId;
  name: string;
  age: number;
  height: number;
  weight: number;
  email?: string;
  computeBMI: IBMIFunction;
}

// BMI = (weight (kg)) / (height * height) in meter kg/m2
const computeBMI: IBMIFunction = (weight: number, height: number): number => {
  const BMI = weight / (height * height);

  return BMI;
};

console.log(computeBMI(76.8, 1.86));

const patientInfo = {
  id: 512,
  name: "Aakrit Subedi",
  age: 25,
  height: 1.86,
  weight: 76.7,
  computeBMI: computeBMI,
};

console.log(patientInfo);
