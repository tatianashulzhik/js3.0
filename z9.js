// 9. Отфильтровать коллекцию по нескольким полям
// Функция параметрами принимает массив, 1 значение поле с которым равно, 2 значение больше, которого другое поле.
// Например, в коллекции мне нужно вывести значения, в которых возраст больше 18, а страна 'RF'.
// Input:
// const arr = [
//   {name: 'test', age: 34, country: 'RF'},
//   {name: 'test2', age: 12, country: 'RF'},
//   {name: 'test1', age: 54, country: 'RF'}
// ];
// func(arr, 'RF', 18)
// Output:
// [{name: 'test', age: 34, country: 'RF'}, {name: 'test1', age: 54, country: ‘RF'}]

// const collection = [
//   { name: "test", age: 34, country: "RF" },
//   { name: "test2", age: 12, country: "RF" },
//   { name: "test1", age: 54, country: "RF" },
// ];
// const filterCollection = (collection, country, age) => {
//   collection.find(function (item) {
//     if (item.age > age && item.country == country) {
//       console.log(item);
//     }
//   });
// };
// filterCollection(collection, "RF", 18);

const collection = [
  { name: "test", age: 34, country: "RF" },
  { name: "test2", age: 12, country: "RF" },
  { name: "test1", age: 54, country: "RF" },
];

const filterCollection = (collection, param, age) => {
  let arr = [];
  return collection.filter((item) => {
    return item.age > age && (item.country === param || item.name === param);
  });
};

console.log(filterCollection(collection, "test1", 18));
