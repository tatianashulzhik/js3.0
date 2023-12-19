// 11. Вернуть отсортированный массив уникальных значений
// Input:
// [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3]
// Output:
// [3, 7, 17]

const arr = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

const uniqueArray = () => {
  const countItems = {};
  for (const item of arr) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }
  const result = Object.keys(countItems).filter((item) => countItems[item] < 2);
  return result.map((string) => parseInt(string));
};

console.log(uniqueArray(arr));

