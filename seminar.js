"use strict";

// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const Person = {
//     name: "",
//     age: 0,
//     gender: "",
//     introduce: function() {console.log(`I'm ${this.age} old and I identify as ${this.gender}`)},
//     changeName: function(newName) {this.name = newName}
// }
// //inrtoduce() {
// //}
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce();
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.gender);
// Person.introduce();
// Person.changeName("Mike");
// Person.introduce();

// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

// const animal = {
//     name: "pet",
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
// };

// const dog = {
//     name: "Рекс",
//     bark(){
//         console.log(`Gav gav`)
//     }
// };

// dog.eat = animal.eat;
// dog.eat();
// dog.bark();
// Задание 3 (call, apply 20 минут)


// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод

// const calculator = {
//     coef: 1,
//     add: function(a, b) {
//         return (a + b) * this.cf;
//     },
//     substract(a, b) {
//         return a - b;
//     },
//     multiply(a, b){
//         return a * b;
//     }
// }

// // console.log(calculator.add.call(5, 3)); // Вывод: 8
// console.log(calculator.add.call({ cf:2 }, 5, 3)); // Вывод: 8

// console.log(calculator.substract.apply(null, [5, 3])); // Вывод
// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old


// класс // /* person 


//   
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         // this.introduce = this.introduce.bind(this); 

//     интродьюс() {
//         /*cl(`My name is ${this.name} and I'm ${this.age} old`)
// const man = new Person("John", 25);
// man.introduce();

// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.


// class BankAccount {

//     balance = 0;
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//         console.log(`Deposited ${amount} into account
//         ${this.accountNumber}. New balance: ${this.balance}`)
//     }
//     withdraw(amount) {
//         if(this.balance >= amount){
//         this.balance -= amount;
//         console.log(`Withdrawn ${amount} from account
//         ${this.accountNumber}. New balance: ${this.balance}`)
//         }else{
//             console.log(`Insufficient funds in account ${this.accountNumber}`)
//         }
//     }
// }

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// //1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// //1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// //1234567890

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:



// function sumDigits(num1) {
//     if (num1 < 10) {
//         return num1;
//     } else {
//         return num1 % 10 +  sumDigits(Math.floor(num1 / 10)) 
//     }
// }
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// //+ 7 + 8 + 9)