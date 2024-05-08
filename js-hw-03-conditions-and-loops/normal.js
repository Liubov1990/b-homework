/* ------------- UTILLS ------------- */

const isOnlyNumbersInString = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);

const checkNumber = (data, callback) => {
  const isOnlyNumbers = isOnlyNumbersInString(data);

  if (!isOnlyNumbers) {
    alert("Ви невірно ввели дані");
    return callback();
  }
};

/* -------------- NORMAL ------------- */

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const palindromTask = () => {
  const fiveDigitNumber = prompt("Введіть п’ятирозрядне число.", "");
  let isPalindrome = true;

  const isFiveDidgitsNumber = fiveDigitNumber.length === 5;

  if (!isOnlyNumbersInString(fiveDigitNumber) || !isFiveDidgitsNumber) {
    const alertText = !isFiveDidgitsNumber
      ? "Ви ввели невірну кількість символів."
      : "Ви ввели не число.";
    alert(alertText);
    return palindromTask();
  } else {
    let str = fiveDigitNumber.length - 1;

    for (let i = 0; i <= str - i; i++) {
      if (isPalindrome) {
        isPalindrome =
          fiveDigitNumber.charAt(i) === fiveDigitNumber.charAt(str - i);
      }
    }
    console.log(
      `Число ${fiveDigitNumber} ${isPalindrome ? "" : "не "}є паліндромом.`
    );
  }
};
palindromTask();

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//  від 200 до 300 - знижка буде 3%;
//  від 300 до 500 - 5%;
//  від 500 і вище - 7%.

const discountTask = () => {
  const purchaseCost = prompt(
    "Щоб знати суму до оплати зі знижкою, введіть суму покупки.",
    ""
  );

  checkNumber(purchaseCost, discountTask);

  const zeroDiscount = purchaseCost >= 0 && purchaseCost < 200;
  const smallPurchase = purchaseCost >= 200 && purchaseCost < 300;
  const midPurchase = purchaseCost >= 300 && purchaseCost < 500;
  const bigPurchase = purchaseCost >= 500;

  const moneyToPay = (discount) =>
    purchaseCost - (discount * purchaseCost) / 100;

  if (smallPurchase) {
    console.log(`Сума до оплати зі знижкою: ${moneyToPay(3)}.`);
  } else if (midPurchase) {
    console.log(`Сума до оплати зі знижкою: ${moneyToPay(5)}.`);
  } else if (bigPurchase) {
    console.log(`Сума до оплати зі знижкою: ${moneyToPay(7)}.`);
  } else if (zeroDiscount) {
    console.log("Ви не маєте знижки.");
  }
};
discountTask();

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const numbersStatisticTask = () => {
  const numbers = prompt("Введіть 10 чисел, розділених пробілом.", "");
  const statistic = {
    even: 0,
    odd: 0,
    positive: 0,
    negative: 0,
    zeros: 0,
  };

  const numArr = numbers.split(" ");
  const isArrLength = numArr.length === 10;
  const isNumbersRangeCorrect = numArr.every((item) =>
    isOnlyNumbersInString(item)
  );

  if (!isArrLength || !isNumbersRangeCorrect) {
    const alertText = !isArrLength
      ? "Ви не ввели 10 чисел"
      : "Не введені всі дані є числами";
    alert(alertText);
    return numbersStatisticTask();
  }

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
};
numbersStatisticTask();
