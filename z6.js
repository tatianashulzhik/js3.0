// 6. Напишите функцию, которая четное число возводит в квадрат, а нечетное в куб. После умножает это значение на 2-й параметр. Прибавляет 3-й и находит корень от получившегося результата, округленный до сотых. Но за счет того, что функция вызывает функцию.
// Input:
// func (17)(6)(2)
// Output:
// 171,69

const calculate = (one) => {
  return (two) => {
    return (three) => {
      result = 0;
      one % 2 == 0 ? (result = one.toFixed(2)) : (result = Math.pow(one, 3));
      result = result * two;
      result = Math.sqrt(result + three);
      return result.toFixed(2);
    };
  };
};

console.log(calculate(17)(6)(2));

// const mainFunction = (one) => (two) => (three) => {
//   result = 0;
//   one % 2 == 0 ? (result = one.toFixed(2)) : (result = Math.pow(one, 3));
//   result = result * two;
//   result = Math.sqrt(result + three);
//   return result.toFixed(2);
// };

// console.log(mainFunction(17)(6)(2));
