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

/* ------------- UTILLS ------------- */

const checkNumber = (elem, callback) => {
  const isNumber = Number(elem);

  if (!isNumber) {
    alert("Ви невірно ввели дані");
    return callback();
  }
};

/* ------------- MINIMUM ------------- */

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const ageTask = () => {
  const age = prompt(
    "Щоб визначити, ким Ви є (дитиною, дорослим або пенсіонером), введіть скільки Вам років?",
    ""
  );

  const isChild = age >= 0 && age <= 11;
  const isTeenager = age >= 12 && age <= 17;
  const isAdult = age >= 18 && age <= 59;
  const isPensioner = age >= 60 && age <= 120;
  const isGhost = age > 120;

  if (isChild) {
    console.log("Ви є дитиною.");
  } else if (isTeenager) {
    console.log("Ви є підлітком.");
  } else if (isAdult) {
    console.log("Ви є дорослим.");
  } else if (isPensioner) {
    console.log("Ви є пенсіонером.");
  } else if (isGhost) {
    console.log("Мабуть, ви привид!");
  } else {
    checkNumber(age, ageTask);
  }
};
ageTask();

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const symbolTask = () => {
  const number = prompt(
    "Щоб визначити символ на клавіші (0-9), введіть число від 0 до 9.",
    ""
  );

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
  const symbol = symbols[Number(number)];

  if (!symbol) {
    checkNumber(symbol, symbolTask);
  } else {
    console.log(`Спецсимвол, який розташований на цій клавіші: ${symbol}.`);
  }
};
symbolTask();

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const rangeTask = () => {
  const firstRangeNumber = Number(
    prompt("Щоб задати діапазон, введіть перше число.", "")
  );
  const secondRangeNumber = Number(
    prompt("Щоб задати діапазон, введіть друге число.", "")
  );
  let rangeSum = null;

  const isCorrectRangeNumber = firstRangeNumber && secondRangeNumber;
  const sortedNumberEdges = [firstRangeNumber, secondRangeNumber].sort(
    (num1, num2) => num1 - num2
  );

  if (!isCorrectRangeNumber) {
    alert("Ви ввели дані неправильно");
    return rangeTask();
  }

  for (let i = sortedNumberEdges[0]; i <= sortedNumberEdges[1]; i++) {
    rangeSum += i;
  }

  console.log(`Сума всіх чисел в заданому діапазоні: ${rangeSum}`);
};
rangeTask();

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const gcdTask = () => {
  const firstNumber = Number(
    prompt("Щоб знайди найбільший спільний дільник, введіть перше число.", "")
  );
  const secondNumber = Number(
    prompt("Щоб знайди найбільший спільний дільник, введіть друге число.", "")
  );
  let gcd;

  const isNumbers = firstNumber && secondNumber;
  const minNumber = Math.min(firstNumber, secondNumber);

  if (!isNumbers) {
    alert("Ви ввели дані неправильно");
    return gcdTask();
  }

  for (let i = 1; i <= minNumber; i++) {
    const checkZeroRest = (num) => num % i === 0;
    const isZeroRest =
      checkZeroRest(firstNumber) && checkZeroRest(secondNumber);

    if (isZeroRest) {
      gcd = i;
    }
  }

  console.log(`Найбільший спільний дільник: ${gcd}.`);
};
gcdTask();

// 5. Запитай у користувача число і виведи всі дільники цього числа.

const divisorsTask = () => {
  const numb = prompt("Щоб вивести усі дільники числа, введіть число.", "");
  let divisors = [];

  checkNumber(numb, divisorsTask);

  for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length) {
    console.log(`Всі дільники числа ${numb}: ${divisors}.`);
  }
};
divisorsTask();
