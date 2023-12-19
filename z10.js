// 10. Вернуть массив тех значений, которые есть в первом, но нет во втором

const arr = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const arr2 = [5, 6, 7, 8];

const RerurnelEmentsArr = (arr, arr2) => {
  let clone = Object.assign([], arr);
  for (let i = 0; i < clone.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (clone[i] == arr2[j]) {
        clone.splice(i, 1);
      }
    }
  }
  return clone;
};

console.log(RerurnelEmentsArr(arr, arr2));
