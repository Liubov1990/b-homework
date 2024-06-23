// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

export default class Circle {
  constructor(radius) {
    this.radius = radius;
    this.diameter = this.radius * 2;
  }

  get circleRadius() {
    return this.radius;
  }

  set circleRadius(newRad) {
    return (this.radius = newRad);
  }

  get circleDiameter() {
    return this.diameter;
  }

  circleArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);

circle.circleRadius;
console.log("Радіус кола:", circle.circleRadius);

circle.circleRadius = 10;
console.log("Новий радіус кола:", circle.circleRadius);

circle.circleDiameter;
console.log("Діаметр кола:", circle.circleDiameter);

circle.circleArea();
console.log("Площа кола:", circle.circleArea());

circle.circumference();
console.log("Окружність кола:", circle.circumference());
