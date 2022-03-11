// Classes
interface IBMIPersonalFunction {
  (): number;
}

interface IStudent {
  id: number;
  name: string;
  rollNo: string;
  height: number;
  weight: number;
  getBMI: IBMIPersonalFunction;
}

class Student implements IStudent {
  public id: number;
  public name: string;
  public rollNo: string;
  public height: number;
  public weight: number;

  constructor(
    id: number,
    name: string,
    rollNo: string,
    height: number,
    weight: number
  ) {
    this.id = id;
    this.name = name;
    this.rollNo = rollNo;
    this.height = height;
    this.weight = weight;
  }

  protected computePersonalBMI(): number {
    const BMI = this.weight / (this.height * this.height);

    return BMI;
  }

  public getBMI(): number {
    const BMI = this.computePersonalBMI();

    return BMI;
  }
}

const aakrit = new Student(512, "Aakrit Subedi", "45/BCT/072", 1.86, 76.7);
console.log(aakrit);

// console.log(`BMI of Aakrit is ${aakrit.computeBMI()}`); Error: Protected property is not accessible outside of class or extended class

console.log(`BMI of Aakrit is ${aakrit.getBMI()}`);

class HeadStudent extends Student {
  isHead: boolean;
  grade: string;

  constructor(
    id: number,
    name: string,
    rollNo: string,
    height: number,
    weight: number,
    isHead: boolean,
    grade: string
  ) {
    super(id, name, rollNo, height, weight);

    this.isHead = isHead;
    this.grade = grade;
  }

  register(): void {
    console.log(
      `${this.name} is register as captian of the class ${this.grade}.`
    );
  }
}

const saramsha = new HeadStudent(42, 'Saramsha Dotel', '45/BCT/072', 1.73, 67.8, true, 'BE. Computer');

saramsha.register();
const saramshaBMI = saramsha.getBMI();
console.log(`BMI Index of Saramsha is ${saramshaBMI}`);
