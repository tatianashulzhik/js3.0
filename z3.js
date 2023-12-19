// 3. Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
// Input:
// [4, 7, 1, 9, 6, 8, 4, 6, 3, 6]
// Output:
// [4, 7, 1, 9, 6, 8, 3]
// Input:
// ['text', 'education', 'part', 'Text']
// Output:
// ['text', 'education', 'part']

const arr = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
const arr2 = ["text", "education", "part", "Text"];
const removeDuplicates = (arr) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr1 = [...new Set(arr)];
    } else {
      const toLowerCase = (str) => str.toLowerCase();
      // const toLowerCase = "".split.call.bind("".toLowerCase);
      const toLowerSet = new Set(arr.map(toLowerCase));
      arr1 = arr.filter(
        (arr) =>
          toLowerSet.has(arr.toLowerCase()) &&
          toLowerSet.delete(arr.toLowerCase())
      );
    }
    return arr1;
  }
};

console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr2));
