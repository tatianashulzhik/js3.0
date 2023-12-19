// 5. Дана строка. Разделить строку на фрагменты по три подряд идущих символа. В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента. Показать фрагменты, упорядоченные по алфавиту.
// Input:
// 'test education part 2'
// Output:
// ["a_i", 'd_c', 'o_ ', 'p_r', 't_2', 't_e', 't_s']

const str = "test education part 2";

const random = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.replace(str, "")[Math.floor(Math.random() * str.length)];
};

symbol = random(str);

const threeСharacters = (str) => {
  let re = /(.{3}|.)/g;
  return str
    .replace(/(.{3}|.)/g, (s) => {
      if (s.length < 3) {
        return s;
      }

      const [l1, l2, l3] = s;
      return `${l1}${symbol}${l3}`;
      // return `${l1}${random([l1, l2, l3])}${l3}`;
    })
    .match(re)
    .sort();
};

console.log(threeСharacters(str));
