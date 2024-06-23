// 3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

import employeesData from "../employees.json" assert { type: "json" };

const tBody = document.querySelector(".employees-table__body");
let template = "";

class Employee {
  constructor(employeeName, position, salary, type) {
    this.employeeName = employeeName;
    this.position = position;
    this.salary = salary;
    this.type = type;
  }
}

export default class EmpTable {
  constructor(templateId, employeesData) {
    this.template = document.getElementById(templateId).innerText;
    this.employeesData = employeesData;
  }

  getHtml() {
    for (let key in this.employeesData) {
      this.template = this.template.replace(
        `{{${key}}}`,
        this.employeesData[key]
      );
    }
    return this.template;
  }
}

// const employee = new Employee();

window.onload = () => {
  employeesData.forEach((employee) => {
    const empTable = new EmpTable("row-template", employee);
    template += empTable.getHtml();
  });
  tBody.innerHTML = template;
};
