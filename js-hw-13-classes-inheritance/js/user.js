// Базовий рівень:

// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти:

// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// У класі Admin повинні бути такі компоненти:

// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers

import { userCreds1, userCreds2, userCreds3, adminCreds } from "./constants.js";

export default class User {
  #password;
  #isLoggedIn;

  constructor({ name, role }) {
    this.role = role;
    this.name = name;
    this.#password = null;
    this.#isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.#isLoggedIn = true;
    return `User ${this.name} is logged in.`;
  }

  logout() {
    this.#isLoggedIn = false;
    return `User ${this.name} is logged out.`;
  }

  сhangeName(newName) {
    this.name = newName;
    return "Name was changed.";
  }

  changePassword(newPassword) {
    this.#password = newPassword;
    return "Password was changed.";
  }
}

class Admin extends User {
  constructor(...args) {
    super(...args);
    this.users = [];
  }

  addUser(newUser) {
    this.users.push(newUser);
    return this.users;
  }

  removeUser(userToRemove) {
    return (this.users = this.users?.filter(
      (user) => user.getName() !== userToRemove
    ));
  }

  changeUserRole(userName, newRole) {
    const isCorrectRole = newRole === "admin" || newRole === "user";

    if (!isCorrectRole) {
      alert(`Role ${newRole} is not correct`);
      return;
    } else {
      console.log(this.role);
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    return (this.users = []);
  }
}

const user1 = new User(userCreds1);
const user2 = new User(userCreds2);
const user3 = new User(userCreds3);
const admin = new Admin(adminCreds);

console.log("User1 name:", user1.getName());
console.log("User2 name:", user2.getName());
console.log("User3 name:", user3.getName());

console.log("User1 role:", user1.getRole());
console.log("User2 role:", user2.getRole());
console.log("User3 role:", user3.getRole());

console.log("Logging in:", user3.login());
console.log("Logging out:", user2.login());

console.log("Crating Admin user:", admin);

console.log("Adding user:", admin.addUser(user1));
console.log("Adding user:", admin.addUser(user2));
console.log("Adding user:", admin.addUser(user3));

console.log("Removing user:", admin.removeUser(userCreds1.name));

console.log(
  "Change user role with error:",
  admin.changeUserRole(userCreds3.name, "customer")
);
console.log(
  "Change user role:",
  admin.changeUserRole(userCreds3.name, "admin")
);
console.log("Getting all users:", admin.getAllUsers());
console.log("Removing all users:", admin.removeAllUsers());
