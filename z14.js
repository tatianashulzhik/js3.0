// 14. Даны две строки. Определите, содержится ли меньшая по длине строка в большей.
// Input:
// ('text education part 2', 'text')
// Output:
// true
// Input:
// ('text education part 2', 'test')
// Output:
// false
const func = (str1, str2) => {
  if (str1.length > str2.length) return str1.includes(str2);
  else return str2.includes(str1);
};

const text1 = "text education part 2";
const text2 = "text";
console.log(func(text1, text2));
