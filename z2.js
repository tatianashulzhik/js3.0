// 2. В функцию передается несколько массивов. Вывести элементы из первого массива, переданного в функцию, которые имеются во всех других переданных в функцию массивах
// Input:
// ([3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 4], [6, 3, 2, 8, 1])
// Output:
// [1]

const arr = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6];
const arr1 = [1, 4, 2, 4];
const arr2 = [6, 3, 2, 8, 1];

// const commonElements = (array1, array2) => {
//   const set1 = new Set(array1);
//   return array1.filter((elem) => array2.includes(elem) && set1.has(elem));
// }
// commonElements(arr, arr1);
// console.log(commonElements(commonElements(arr, arr1), arr2));

const commonElements = (...arrays) => {
  const sets = arrays.map((arr) => new Set(arr));
  return arr.filter((elem) => sets.every((set) => set.has(elem)));
};
console.log(commonElements(arr, arr1, arr2));
