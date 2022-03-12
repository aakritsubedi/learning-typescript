// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

const numArray = getArray<number>([1, 2, 3, 4, 5, 6]);
const strArray = getArray<string>(["Aakrit", "Yukti"]);

strArray.push("Sadikshaya");
