// 1. Калькулятор 
// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму яка отримує знак математичної 
// операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2 цифровими значеннями

// !!!!!!!!!!РІШЕННЯ!!!!!!!!!!!!
// function SummTwoNombers(x, y) {
//     return x+y;
// }
// function SubtractionTwoNombers(x, y) {
//     return x-y;
// }
// function DivisionTwoNombers(x, y) {
//     return x/y;
// }
// function MultiplicationTwoNombers(x, y) {
//     return x*y;
// }

// SummTwoNombers(40, 10);
// SubtractionTwoNombers(125, 12);
// DivisionTwoNombers(80, 20);
// MultiplicationTwoNombers(400, 3230);

// console.log(`40+10=${SummTwoNombers(40, 10)}`);
// console.log(`125-12=${SubtractionTwoNombers(125, 12)}`);
// console.log(`80/20=${DivisionTwoNombers(80, 20)}`);
// console.log(`40*30=${MultiplicationTwoNombers(40, 30)}`);



// 2. Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.

// РІШЕННЯ
// function WellcomUser (value) {
//     console.log(`Вітаю Вас ${value}!`);
// }

// let NoWellcomUser = function (value) {
//     console.log(`А Вас ${value} я не вітаю!`);
// }

// function hiUser(UserName, WellcomUser, NoWellcomUser) {
// if(UserName == 'Abdula'){
//     WellcomUser(UserName);
// }
// else{
//     NoWellcomUser(UserName);
// }
// }

// hiUser('Artem', WellcomUser, NoWellcomUser);
// hiUser('Kostja', WellcomUser, NoWellcomUser);
// hiUser('Abdula', WellcomUser, NoWellcomUser);
// hiUser('Olga', WellcomUser, NoWellcomUser);
// hiUser('Kristina', WellcomUser, NoWellcomUser);


// 3. Стрілкові функції:
// Перепишіть попередню функцію в стрілкову
// Рішення

// let WellcomUser = (UserName) => console.log(`Вітаю Вас ${UserName}!`);
// let NoWellcomUser = (UserName) => console.log(`А Вас ${UserName} я не вітаю!`);
// let hiUser = (UserName, WellcomUser, NoWellcomUser) => {
//     if (UserName == 'Abdula') {
//         WellcomUser(UserName);
//     } else {
//         NoWellcomUser(UserName);
//     }
// };

// hiUser('Artem', WellcomUser, NoWellcomUser);
// hiUser('Kostja', WellcomUser, NoWellcomUser);
// hiUser('Abdula', WellcomUser, NoWellcomUser);
// hiUser('Olga', WellcomUser, NoWellcomUser);
// hiUser('Kristina', WellcomUser, NoWellcomUser);

// 4. Параметри за замовчуванням:
// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.
// Рішення

// function GRASS(x = 6, y = 1) {
//     return x + y
// }
// console.log(`Функція рахує цифри за замовченням =${GRASS()}`);
// console.log(`Визначені мною цифри-1 =${GRASS(3,64)}`);
// console.log(`Визначені мною цифри-2 =${GRASS(20,14)}`);



// 5. Задача з колбеком:
// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення
// Рішення

// function Notice(DollarNotice='IN GOD WE TRUST') {
//     return DollarNotice;
// }

// function Publicity (DollarNotice) {
//     console.log(`Ewery dollar bill has got a notice ${DollarNotice}`)
// }

// Publicity('IN GOD WE TRUST');



// 6. Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;
// Рішення


// const multiplyValues = function (a, b, c) {
//     return a * b * c;
// }

// console.log(`${multiplyValues(1,2,3)}`);