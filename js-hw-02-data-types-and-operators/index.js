/* ------------- CONSOLE ------------- */
const getStringifiedStyles = (styles) => styles.join(";");

const consoleMessageStyles = getStringifiedStyles([
  "color: #0b2b26",
  "background: #52b2bf",
  "font-size: 17px",
  "padding: 5px 0",
]);

const consoleOutputStyles = getStringifiedStyles([
  "color: #235347",
  "background: #daf1de",
  "font-size: 17px",
  "padding: 5px 0",
]);

/* ------------- MINIMUM ------------- */
// 1
const firstNumber = 0.1;
const secondNumber = 0.2;
const numbersSum = Number(firstNumber + secondNumber).toFixed(1);
console.log(
  `%c Matemathical result of sum 0.1 + 0.2: %c ${numbersSum}`,
  consoleMessageStyles,
  consoleOutputStyles
); // 0.3

// 2.
const str = "1";
const numb = 2;

const sum = Number(str) + numb;

console.log(
  `%c Adding "1" + 2: %c ${sum}`,
  consoleMessageStyles,
  consoleOutputStyles
); // 3

// 3.
// 3.1 -- NOT CORRECT
// const GIGABITE = 1024;
// const fileSize = 820;

// const userFleshSize = prompt(
//   "Скільки файлів розміром 820 MB поміститься на Вашу флешку? Впишіть розмір вашої флеш карти у GB.",
//   ""
// );

// const gigabitesInFlesh = userFleshSize * GIGABITE;
// const filesCount = Math.trunc(gigabitesInFlesh / fileSize);
// console.log(
//   `%c PROMPT Files on drive: %c ${filesCount}`,
//   consoleMessageStyles,
//   consoleOutputStyles
// );

// 3.2 -- SOLUTION
/* ( const fleshSize = 16; // GB / 16 000 Mb / 16 384 Mb
   console.log(16000000000 / 1024 / 1024 /1024)
   // 14, 15.2 ...
   // 14.8 Gb / 14 800 Mb)
*/

const fleshSize = prompt(
  "Скільки файлів розміром 820 MB поміститься на Вашу флешку? Впишіть розмір вашої флеш карти у GB.",
  ""
);
const fileSize = 820;
const filesCount = Math.floor(
  (fleshSize * 1000 * 1000 * 1000) / (fileSize * 1024 * 1024)
  //     Gb    => Mb  => Kb  => b         Mb     => Kb  => b
  //        фактичний                          фактичний
);

console.log(
  `%c PROMPT Money left: %c ${filesCount}`,
  consoleMessageStyles,
  consoleOutputStyles
);

/* -------------- NORMAL ------------- */

// 1.
const moneyInWallet = prompt("Введіть скільки у вашому гаманці коштів.", "");
const chocolatePrice = prompt("Введіть скільки коштує шоколадка.", "");

const chocolateResult = Math.trunc(moneyInWallet / chocolatePrice); // кількість шоколадок на кошти, що у гаманці
const moneySpent = chocolatePrice * chocolateResult; // скільки грошей витрачено на шоколад
const moneyLeft = moneyInWallet - moneySpent; // скільки грошей залишилося

console.log(
  `%c PROMPT Chocolates can buy: %c ${chocolateResult}`,
  consoleMessageStyles,
  consoleOutputStyles
);

console.log(
  `%c PROMPT Money left: %c ${moneyLeft}`,
  consoleMessageStyles,
  consoleOutputStyles
);

// 2.
const numberInput = prompt("Введіть тризначне число.", "");

// 2.1 // long and ugly way
// const char1 = numberInput.charAt(0);
// const char2 = numberInput.charAt(1);
// const char3 = numberInput.charAt(2);
// const concatinatedReverse = `${char3}${char2}${char1}`;
// or
// const newString = "";
// const concatinatedReverse = newString.concat(char3, char2, char1);
// console.log(concatinatedReverse);

// 2.2
// const reverse = numberTrio.split("").reverse().join("");
// or the same
// const reverse = Array.from(numberInput).reverse().join("");
// or the same
const reverse = [...numberInput].reverse().join("");

console.log(
  `%c PROMPT Reverse number: %c ${reverse}`,
  consoleMessageStyles,
  consoleOutputStyles
);

// /* ---------------- MAX -------------- */
// 1.
// 1.1 -- NOT CORRECT
// const MONTHS_IN_YEAR = 12;
// const INVESTMENT_MONTHS_COUNT = 2;

// const investmentSum = prompt("Введіть суму вкладу в банк на 2 місяці.", "");
// const sumPerMonth = investmentSum / INVESTMENT_MONTHS_COUNT; // сумма за місяць
// const sumPerYear = sumPerMonth * MONTHS_IN_YEAR; // сумма за рік
// const percentPerYear = (sumPerYear / 100) * 5; // кількість відсотків за рік
// const percentPerTwoMonth =
//   (percentPerYear / MONTHS_IN_YEAR) * INVESTMENT_MONTHS_COUNT; // кількість відсотків за 2 місяці

// console.log(
//   `%c PROMPT Сума нарахованих відсотків: %c ${percentPerTwoMonth}`,
//   consoleMessageStyles,
//   consoleOutputStyles
// );

// 1.2 --SOLUTION
const depositRate = 0.05;
const depositTerm = 2;
const months = 12;
const depositSum = prompt("Введіть суму вкладу в банк на 2 місяці.", "");

const mounthlyRate = depositRate / 12;
const profit = depositSum * mounthlyRate * depositTerm;
console.log(
  `%c PROMPT Сума нарахованих відсотків: %c ${profit}`,
  consoleMessageStyles,
  consoleOutputStyles
);

// 2.
// 2 && 0 && 3 returns 0 (one false all false, returns 1st false)
// 2 || 0 || 3 returns 2 (finds first true, returns it)
// 2 && 0 || 3 returns 3 (first compares && part and returnes false, but here later we have --- 0 || 3 --- returns true)
