/* -------------- NORMAL ------------- */

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// 1.1
// const num = 6;
// const checkPerfectNumber = (num = 1) => {
//   if (num === 1) {
//     return false;
//   }
//   let sum = 1;
//   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) {
//       sum = sum + i + num / i;
//       if (sum > num) {
//         return false;
//       }
//     }
//   }
//   return sum === num;
// };
// console.log(checkPerfectNumber(num));

// 1.2
const isPerfectNumber = (number) => {
  let sum = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number && sum !== 0;

  //   return sum === number && sum !== 0
  //     ? console.log(`${number} is a perfect number.`)
  //     : console.log(`${number} is not a perfect number.`);
};

// isPerfectNumber(28);

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

const checkPerfectNumbersInRange = (min, max) => {
  const perfectNumbers = [];

  for (let i = min; i < max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
};

console.log(
  "List of perfect numbers in range:",
  checkPerfectNumbersInRange(2, 950)
);
