// 15. Вывести сообщение равны ли 2 объекта.
// Input:
// const a = {test: 8, text: 9};
// const b = {test: 8, text: 9};
// func(a, b)
// Output:
// true

// const func = (a, b) => {
//   if (JSON.stringify(a) === JSON.stringify(b)) return "true";
//   else return "false";
// };

// const a = { test: 8, text: 9 };
// const b = { test: 8, text: 9 };
// const result = func(a, b);
// console.log(result);

const object1 = { test: 8, text: 9 };
const object2 = { test: 8, text: 9 };

function compareObjects(object1, object2) {
  let same = true;
  for (let key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (object2[key] !== object1[key]) {
        same = false;
        break;
      }
    }
  }
  return same;
}
console.log(compareObjects(object1, object2));
