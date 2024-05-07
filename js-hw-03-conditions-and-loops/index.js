// /* ------------- CONSOLE ------------- */
// const getStringifiedStyles = (styles) => styles.join(";");

// const consoleMessageStyles = getStringifiedStyles([
//   "color: #0b2b26",
//   "background: #52b2bf",
//   "font-size: 17px",
//   "padding: 5px 0",
// ]);

// const consoleOutputStyles = getStringifiedStyles([
//   "color: #235347",
//   "background: #daf1de",
//   "font-size: 17px",
//   "padding: 5px 0",
// ]);

/* ------------- MINIMUM ------------- */
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const age = prompt("Скільки Вам років?", "");

if (age <= 11) {
  console.log("Ви є дитиною.");
} else if (age >= 12 && age <= 17) {
  console.log("Ви є підлітком.");
} else if (age >= 18 && age <= 59) {
  console.log("Ви є дорослим.");
} else if (age >= 60) {
  console.log("Ви є пенсіонером.");
} else {
  console.log("Ви ввели некоректне значення. неможливо визначити ким Ви є.");
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const number = prompt("Введіть число від 0 до 9.", "");

// 2.1
// switch (number) {
//   case "0":
//     console.log(")");
//     break;
//   case "1":
//     console.log("!");
//     break;
//   case "2":
//     console.log("@");
//     break;
//   case "3":
//     console.log("#");
//     break;
//   case "4":
//     console.log("$");
//     break;
//   case "5":
//     console.log("%");
//     break;
//   case "6":
//     console.log("^");
//     break;
//   case "7":
//     console.log("&");
//     break;
//   case "8":
//     console.log("*");
//     break;
//   case "9":
//     console.log("(");
//     break;
//   default:
//     console.log("Ви ввели некоректне значення");
// }

// 2.2
const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
const symbol = symbols[Number(number)] || "Ви ввели некоректне значення.";
console.log(`Спецсимвол, який розташований на цій клавіші: ${symbol}.`);

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const firstRangeNumber = Number(
  prompt("Щоб задати діапазон, введіть перше число.", "")
);
const secondRangeNumber = Number(
  prompt("Щоб задати діапазон, ведіть друге число.", "")
);

let rangeSum = 0;

for (let i = firstRangeNumber; i <= secondRangeNumber; i++) {
  rangeSum += i;
}

console.log(`Сума всіх чисел в заданому діапазоні: ${rangeSum}`);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNumber = Number(
  prompt("Щоб знайди найбільший спільний дільник, введіть перше число.", "")
);
const secondNumber = Number(
  prompt("Щоб знайди найбільший спільний дільник, введіть друге число.", "")
);

const minNumber = Math.min(firstNumber, secondNumber);
let gcd;

for (let i = 1; i <= minNumber; i++) {
  const checkZeroRest = (num) => num % i === 0;
  const isZeroRest = checkZeroRest(firstNumber) && checkZeroRest(secondNumber);

  if (isZeroRest) {
    gcd = i;
  }
}

console.log(`Найбільший спільний дільник: ${gcd}.`);

// 5. Запитай у користувача число і виведи всі дільники цього числа.

const numb = Number(prompt("Введіть число.", ""));
let divisors = [];
for (let i = 1; i <= numb; i++) {
  if (numb % i === 0) {
    divisors.push(i);
  }
}
console.log(`Всі дільники числа ${numb}: ${divisors}.`);

/* -------------- NORMAL ------------- */

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fiveDigitNumber = prompt("Введіть п’ятирозрядне число.", "");

let str = fiveDigitNumber.length - 1;
let isPalindrome = true;

for (let i = 0; i <= str - i; i++) {
  isPalindrome =
    isPalindrome &&
    fiveDigitNumber.charAt(i) === fiveDigitNumber.charAt(str - i);
}
console.log(
  `Число ${fiveDigitNumber} ${isPalindrome ? "" : "не "}є паліндромом.`
);

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//  від 200 до 300 - знижка буде 3%;
//  від 300 до 500 - 5%;
//  від 500 і вище - 7%.

const purchaseCost = Number(prompt("Введіть суму покупки.", ""));

const smallPurchase = purchaseCost >= 200 && purchaseCost < 300;
const midPurchase = purchaseCost >= 300 && purchaseCost < 500;
const bigPurchase = purchaseCost >= 500;

let discount;

const moneyToPay = (discount) => purchaseCost - (discount * purchaseCost) / 100;

if (smallPurchase) {
  console.log(moneyToPay(3));
} else if (midPurchase) {
  console.log(`Сума до оплати зі знижкою: ${moneyToPay(5)}.`);
} else if (bigPurchase) {
  console.log(`Сума до оплати зі знижкою: ${moneyToPay(7)}.`);
} else {
  console.log("Ви не маєте знижки.");
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const numbers = prompt("Введіть 10 чисел, розділених пробілом.", "");

const numArr = numbers.split(" ");

const statistic = {
  even: 0,
  odd: 0,
  positive: 0,
  negative: 0,
  zeros: 0,
};

const checkOnEvenOdd = (num) => {
  if (num % 2 === 0) {
    return (statistic.even = ++statistic.even);
  }

  return (statistic.odd = ++statistic.odd);
};

for (let i = 0; i <= numArr.length - 1; i++) {
  const numb = Math.sign(numArr[i]);

  if (numb === 0) {
    statistic.zeros = ++statistic.zeros;
    checkOnEvenOdd(numb);
    continue;
  }

  if (numb === 1) {
    statistic.positive = ++statistic.positive;
    checkOnEvenOdd(numb);
    continue;
  }

  if (numb === -1) {
    statistic.negative = ++statistic.negative;
    checkOnEvenOdd(numb);
    continue;
  }
}

console.log(
  `Статистика по усім введеним числам: ${JSON.stringify(statistic)}.`
);

/* ---------------- MAX -------------- */
// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

const userNumber = alert("Загадайте число від 0 до 100.", "");

let start = 0;
let end = 100;
let n;
while (true) {
  let mid = Math.floor((start + end) / 2);
  n = mid;
  const isSmaller = confirm(`Ваше число < ${n}?`);
  const isLarger = confirm(`Ваше число > ${n}?`);
  const isTheNumber = confirm(`Ваше число == ${n}?`);

  if (isLarger) {
    start = mid + 1;
  } else if (isSmaller) {
    end = mid - 1;
  } else if (isTheNumber) {
    alert(`Ваше загадане число: ${n}.`);
    break;
  }
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

// 2.1

// for (i = 2; i <= 9; i++) {
//   let j = 1;
//   while (j <= 10) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
// }

// 2.2
for (i = 2; i <= 9; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

const dayInput = prompt("Введіть день місяця.", "");
const monthInput = prompt("Введіть місяць.", "");
const yearInput = prompt("Введіть рік.", "");

const day = parseInt(dayInput);
const month = parseInt(monthInput);
const year = parseInt(yearInput);

const nextDay = new Date(year, month - 1, day + 1);

console.log(`Наступна дата: ${nextDay.toLocaleDateString()}.`);

/* -------------- CLASSROOM REFACTORING ------------- */
// 1. Refactoring

const width = 10;
const height = 5;

const checkSizes = (elem, size) => elem === 0 || elem === size - 1;

for (let i = 0; i < height; i++) {
  let row = "";

  for (let j = 0; j < width; j++) {
    // WAS
    // if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {}

    // 1.1
    // const isHeight = i === 0 || i === height - 1;
    // const isWidth = j === 0 || j === width - 1;
    // if (isHeight || isWidth) {}

    // 1.2
    if (checkSizes(i, height) || checkSizes(j, width)) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
