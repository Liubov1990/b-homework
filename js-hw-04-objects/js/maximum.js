/* ---------------- MAX -------------- */

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
//    Складання 2-х об'єктів-дробів.
//    Віднімання 2-х об'єктів-дробів.
//    Множення 2-х об'єктів-дробів.
//    Ділення 2-х об'єктів-дробів.
//    Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

const fructions = {
  firstFruction: 0.1,
  secondFruction: 0.2,

  cutNumbers: function (res) {
    return res.toFixed(2);
  },

  add: function () {
    const sum = this.firstFruction + this.secondFruction;
    console.log(this.cutNumbers(sum));
  },

  substract: function () {
    const diff = this.firstFruction - this.secondFruction;
    console.log(this.cutNumbers(diff));
  },

  multiplicate: function () {
    const mult = this.firstFruction * this.secondFruction;
    console.log(this.cutNumbers(mult));
  },

  divide: function () {
    const div = this.firstFruction / this.secondFruction;
    console.log(this.cutNumbers(div));
  },

  reduct: function () {
    const numerator = parseFloat(prompt("Введіть перше число:"));
    const denominator = parseFloat(prompt("Введіть друге число:"));
    let N = numerator;
    let D = denominator;

    for (let i = 2; i <= numerator; i++) {
      if (numerator % i === 0 && denominator % i === 0) {
        N = numerator / i;
        D = denominator / i;
      }
    }

    console.log(
      `При скороченні дріб ${numerator}/${denominator} буде наступним: ${N}/${D}`
    );
  },
};

fructions.add();
fructions.substract();
fructions.multiplicate();
fructions.divide();
fructions.reduct();
