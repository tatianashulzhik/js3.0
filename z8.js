// 8. Удалить из массива значения, индексы которых указаны во втором массиве

const arr = [5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1];
const arr2 = [2, 5, 1];
const removeIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      
      if (i == arr2[j]) {
        // arr.splice(i, 1);
        delete arr[i]
      }
    }
  }
  return arr.join('').split('').map(Number);
};

console.log(removeIndex(arr, arr2));
