// 13. Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.
// Input:
// {
//   name: 'test',
//   age: 25,
//   weight: 65,
//   height: 165
// }

const obj = {
  name: "test",
  age: 25,
  weight: 65,
  height: "165",
};

const doublSize = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    } else if (typeof obj[key] === isNaN()) {
      obj[key] = String(parseInt(obj[key]) * 2);
    }
  }
  return obj;
};

console.log(doublSize(obj));
