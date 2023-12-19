// 1. Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.
// Input:
// ('text education part 2', 'text education')
// Output:
// ' part 2'
// Пример использования:
// const differenceSymbols = (str1, str2) => {
//   // ....
// }
// const text1 = 'text education part 2';
// const text2 = 'text education';
// const result = differenceSymbols(text1, text2);
// console.log(result); // Выводит ' part 2’

const differenceSymbols = (str1, str2) => {
  const strLength = str1.length;
  const strLength2 = str2.length;
  if (strLength > strLength2) {
    return str1.substring(strLength2);
  }
  return str2.substring(strLength);
};

const text1 = "text education part 2";
const text2 = "text education";
const result = differenceSymbols(text1, text2);
console.log(result); // Выводит ' part 2’
