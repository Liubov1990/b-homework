/* ------------- MINIMUM ------------- */
// 1. Напиши всі можливі варіанти створення функцій.

function functionDeclaration() {}
functionDeclaration();

const functionExpression = function () {};
functionExpression();

const namedFunctionExpression = function someName() {};
namedFunctionExpression();

const arrowFunction = () => {};
arrowFunction();

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function showArguments(prop1, prop2, prop3, ...props) {
  for (let i = 0; i < arguments.length; i++) {
    console.log("Argument:", arguments[i]);
  }
}
showArguments(15, 23, 3, 4, 543, "Hello!", [9, 8], { name: "John" });

// 3. Напиши функцію, яка приймає 2 числа і повертає :
//   -1, якщо перше число менше, ніж друге;
//   1 - якщо перше число більше, ніж друге;
//   0 - якщо числа рівні.

const checkNumbers = (a, b) =>
  a > b
    ? console.log("Перше число більше, ніж друге:", 1)
    : a < b
    ? console.log("Перше число менше, ніж друге:", -1)
    : console.log("Числа рівні:", 0);

checkNumbers(4, 4);

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));

console.log("Factorial:", factorial(7));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

// 5.1
// function joinNumbers(num1, num2, num3) {
//   let arr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     arr.push(arguments[i]);
//   }

//   console.log("Joined numbers:", parseInt(arr.join("")));
// }
// joinNumbers(1, 4, 9);

// 5.2
const joinNumbers2 = (...params) =>
  console.log("Joined numbers:", typeof parseInt(params.join("")));

joinNumbers2(5, 6, 3);

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const area = (a, b) => {
  return !b
    ? console.log("Square area:", a * a)
    : console.log("Rectangle area:", a * b);
};

area(4, 9);
area(4);
