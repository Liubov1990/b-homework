/* ------------- MINIMUM ------------- */

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//   Метод, який виводить на екран інформацію про автомобіль.
//   Додавання ім’я водія у список
//   Перевірка водія на наявність його ім’я у списку
//   Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const carCharacteristics = {
  manufacturer: "nissan",
  model: "qashqai",
  year: 2019,
  averageSpeed: 120,
  fuelTank: 55,
  averageFuelConsumption: 8,
};

class Car {
  constructor({
    manufacturer,
    model,
    year,
    averageSpeed,
    fuelTank,
    averageFuelConsumption,
  } = carCharacteristics) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
    this.fuelTank = fuelTank;
    this.averageFuelConsumption = averageFuelConsumption;
  }

  carInfo() {
    console.log(`Автомобіль ${this.manufacturer} ${this.model} ${this.year} року випуску, має наступні технічні характеристики:
    середня швидкість - ${this.averageSpeed} км/год.;
    топливний бак - ${this.fuelTank} л.;
    середня витрата палива на 100 км - ${this.averageFuelConsumption} л.`);
  }

  addDriverName() {
    carCharacteristics.driverName = "John Doe";
    console.log(`Додано водія з іменем "${carCharacteristics.driverName}" `);
  }

  checkDriver() {
    carCharacteristics.driverName === "Johnny Doe"
      ? console.log(`Водія знайдено`)
      : console.log(`Водія не знайдено`);
  }

  getTripTime(distance) {
    const timeWithStops = 5;

    const timeWithoutStops = distance / this.averageSpeed;
    const stopsCount = Math.trunc(timeWithoutStops / timeWithStops);
    const generalTripTime = (timeWithoutStops + stopsCount).toFixed(2);

    return generalTripTime;
  }

  getFuelConsumption(distance) {
    const fuelToSpend = (distance * this.averageFuelConsumption) / 100;
    const timesToRefuel = Math.ceil(fuelToSpend / this.fuelTank);

    return {
      fuelToSpend,
      timesToRefuel,
    };
  }

  getTripDetails() {
    const distance = 1000;

    const generalTripTime = this.getTripTime(distance);
    const { fuelToSpend, timesToRefuel } = this.getFuelConsumption(distance);

    console.log(
      `Для того, щоб подолати відстань у ${distance} км. зі швидкістю ${this.averageSpeed} км/год. автомобілем "${this.manufacturer} ${this.model}", при кожних 4 години в дорозі з подальшою зупинкою на 1 годину, потрібно:
      часу - ${generalTripTime} год.;
      топлива - ${fuelToSpend} л.;
      заправок - ${timesToRefuel}.`
    );
  }
}

const car = new Car(carCharacteristics);

car.carInfo();
car.addDriverName();
car.checkDriver();
car.getTripDetails();
