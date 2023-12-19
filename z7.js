// 7. Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false если нет

const str = "testset";


const palindrome = (str) => {
  let str2 = "";
  str2 = str.toLowerCase();

  return str2 === str2.split("").reverse().join("");
};

console.log(palindrome(str));


