// 1. Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.


// function Person(name, age) {
// this.name = name;
// this.aga = age;
// }

// let John = new Person('John', 52);
// console.log(John);



class Person{
    constructor(name, age){
    this.name = name;
    this.age = age;
}
}
let John = new Person('John', 30);
console.log(John);


// 2. Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

Person.prototype.sayHello = function () {
    return `Hello my deer friend ${this.name}!!!!!!!!!!!!!!!!!!!!!!`
}
console.log(John.sayHello());


// 3. Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.



class Student extends Person{
    constructor(name, age, studentId){
        super (name, age);
        this.studentId = studentId;
    }

getElectronicInfo(){
    console.log(`Студент ${this.name} має АйДі ${this.studentId} і навчається у АйТі академії.`);}
}

let Nikifor = new Student('Nikifor', 16, '34234t2342345234');
Nikifor.getElectronicInfo();
