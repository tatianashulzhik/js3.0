// 12. Реализуйте функцию, которая принимает на вход объект и возвращает массив-пар.
// Input:
// ({ 'dog': 6, 'cat': 11 })
// Output:
// ([['dog', 6], ['cat', 11]])

const obj = { dog: 6, cat: 11 };
const arrayPair = (obj) => {
  return Object.entries(obj);
};

console.log(arrayPair(obj));

