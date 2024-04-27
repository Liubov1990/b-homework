/* ------------- MINIMUM ------------- */

// 2. Variables for name and surname:
// - userFullName;
// - fullName;
// - firstAndLastName;
// - nameData;

// Wrong names using:
// - 1name
// - na-me
// - na me
// - for, return, null, name (all reserved words)

// 3. Ways to comment js code:
// - // - (Used to comment one line. When placed before code - comments all line, when after - comments what is behind.)
// - /**/ - (Used to comment multiple lines.)

// 4. Naming styles:
// - camelCase
// - flatcase
// - UPPERFLATCASE
// - snake_case
// - camel_Snake_Case
// - SCREAMING_SNAKE_CASE (etc.)

/* ------------- NORMAL ------------- */

// 1.
let userName = prompt("Введіть своє ім'я:", "");
alert(`Привіт, ${userName}!`);

// 2.
const CURRENT_YEAR = new Date().getFullYear();

let birthYear = prompt("Введіть рік свого народження:", "");
let userAge = CURRENT_YEAR - birthYear;
alert(`Твій вік: ${userAge}р.`);

// 3.
let squareSideLength = prompt("Введіть довжину однієї сторони квадрата:", "4");
let squarePerimetr = squareSideLength * 4;
alert(`Периметр квадрата становить ${squarePerimetr}.`);

/* ------------- MAX ------------- */

// 1.
let circleRadius = prompt("Введіть радіус кола:", "5");
let circleArea = (Math.PI * circleRadius ** 2).toFixed(2);
alert(`Площа кола становить ${circleArea}.`);

// 2.
let citiesDistance = prompt(
  "Введіть відстань між двома містами в кілометрах:",
  "520"
);
let desirableTime = prompt(
  "За скільки годин Ви хочете дістатися до іншого міста?",
  "3"
);
let necessarySpeed = (citiesDistance / desirableTime).toFixed(2);
alert(
  `Щоб встигнути вчасно дістатися до іншого міста, необхідно рухатися зі швидкістю ${necessarySpeed} км/год.`
);

// 3.
const DOLLAR_EXCHANGE_RATE = 39.6702; // on 4/27/2024 5:47 PM
const EURO_EXCHANGE_RATE = 42.5205; // on 4/27/2024 5:47 PM

let currenciesExchangeRate = DOLLAR_EXCHANGE_RATE / EURO_EXCHANGE_RATE;

let dollarsAmount = prompt(
  "Введіть сумму у доларах, щоб дізнатися, скільки це буде у євро:",
  "100"
);

let exchangedRate = dollarsAmount * currenciesExchangeRate;

alert(
  `При курсі ${currenciesExchangeRate.toFixed(
    2
  )} євро за доллар, в суммі Ви отримаєте $${exchangedRate.toFixed(1)}.`
);
