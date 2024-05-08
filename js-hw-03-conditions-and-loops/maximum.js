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

const isCorrectDate = (string) => /^\d{2}([.//])\d{2}\1\d{4}$/.test(string);

const nextDateTask = () => {
  const date = prompt("Введіть дату в наступному форматі: mm/dd/yyyy");

  if (!isCorrectDate(date)) {
    alert("Ви ввели дату в неправильному форматі");
    return nextDateTask();
  }

  const inputDate = new Date(date);
  const nextDayDate = new Date(inputDate);
  nextDayDate.setDate(nextDayDate.getDate() + 1);

  console.log(`Наступна дата: ${nextDayDate.toLocaleDateString()}.`);
};

nextDateTask();

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
