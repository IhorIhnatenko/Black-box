// Перепишіть цей код використовуючи let const~

// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }


// // Замість var
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// Замість var
// for (const i = 0; i < 5; i++) {
//     console.log(i);
// }



// // Замість var

// var message = 'test';

// function example() {

//     if (true) {

//         var message = 'Hello, world!';

//         console.log(message);

//     }

//     console.log(message); // Виведе 'Hello, world!'

// }

// let message = 'test';

// function example() {

//     if (true) {

//         let message = 'Hello, world!';

//         console.log(message);

//     }

//     console.log(message); // Виведе 'Hello, world!'

// }


// const message = 'test';

// function example() {

//     if (true) {

//         const message = 'Hello, world!';

//         console.log(message);

//     }

//     console.log(message); // Виведе 'Hello, world!'

// }





// Завдання 2.

// Використовуючи for in  виведіть значення з об'єктку в console.log

// const person = {
//     name: 'John',
//     age: 25,
//     occupation: 'Developer'
// };


// for (const key in person) {
//     console.log(`The Person's ${key} is ${person[key]}`);
// }



// Завдання 3.

// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 22, grade: 'B' },
//     { name: 'Charlie', age: 21, grade: 'C' }
// ];

// for (const Value of students) {
//     console.log(`Student's name is ${Value.name}, age - ${Value.age} and mark is ${Value.grade}`);
// }

// for (const key in students) {
//     console.log(`Student's name is ${students[key].name}, age - ${students[key].age} and mark is ${students[key].grade}`);
// }