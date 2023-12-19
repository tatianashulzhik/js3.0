// 4. Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, и возвращающую массив, который содержит все числа из диапазона, включая начальное и конечное. Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.
// Input:
// range(5, 2, -1)
// Output:
// [5, 4, 3, 2]
// Input:
// range(4, 16, 2)
// Output:
// [4, 6, 8, 10, 12, 14, 16]

const range = (start, end, step = 1) => {
  let i = start;
  const arr = [];

  if (!step || step > 0) {
    if (start < end) {
      step = 1;
    } else return "Шаг должен быть отрицательным целым числом.";
  }

  if (step < 0) {
    if (start > end) {
      start = end;
      end = i;
    } else return "Шаг должен быть положительным целым числом.";
  }

  for (; i >= start && i <= end; i += step) {
    arr.push(i);
  }

  return arr;
};

console.log(range(5, 2, -1));
console.log(range(4, 16));
