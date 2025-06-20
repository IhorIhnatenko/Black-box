
// push:

// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

// let NumbersList = [, , , , , , ];
// console.log('Метод Пуш');
// NumbersList.push('Hello!');

// NumbersList.push(12);
// NumbersList.push(true);
// console.log(NumbersList);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.
// let Arrey1 = [12, 67, 8, 'agamemnom', 93];
// let SomeElemet = 'Klavdija Petrivna';

// let PanasMirnyy = (D, F)=>{D.push(F); return D};
// console.log(PanasMirnyy(Arrey1, SomeElemet));

// function DimaKoljdenko (Arrey1, SomeElemet) {
//     Arrey1.push(SomeElemet);
//     return Arrey1;
// }
// console.log(DimaKoljdenko(Arrey1, SomeElemet));
 
// const PanasMirnyy2 = function (D, F){
//     D.push(F);
//     return D;
// }
// console.log(PanasMirnyy2(Arrey1, SomeElemet));




// pop:

// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
// let Crast = [12, 89, , , , , , , 67, 98, 406];
// let Sauron = Crast.pop();
// console.log(Crast);
// console.log(Sauron);


// Завдання 2. Напишіть стрілочну функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.
// let Ahiles = [12, , , , , , , 56, 79];
// console.log(Ahiles);

// let Ajax = (A)=>{
//     A.pop(); 
//     return A};
// console.log(Ajax(Ahiles));

// function Ajax(Ahiles){
// Ahiles.pop();
// return Ahiles
// }
// console.log(Ajax(Ahiles));

// let Herkules = function (ZXC) {
// ZXC.pop();
// return ZXC
// }
// console.log(Herkules(Ahiles));

// let Aragorn = (F) =>{
// return F.pop()
// } 
// console.log(Aragorn(Ahiles));



// unshift:

// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
// let lincoln = new Array(14);
// lincoln.unshift(12, 5,'Rembo');
// console.log(lincoln);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.
// let Kaktus = new Array(10);
// let Gvozdika = 'I vant be added';

// function Zeppiline(Kaktus, Gvozdika) { 
// Kaktus.unshift(Gvozdika);
// return Kaktus;
// }
// console.log(Zeppiline(Kaktus, Gvozdika));

// let Navarra = function (a, s) {
//   a.unshift(s);
//   return a  
// }
// console.log(Navarra(Kaktus, Gvozdika));

// let Bush = (z, x) =>{
// z.unshift(x);
// return z
// }
// console.log(Bush(Kaktus, Gvozdika));



// shift:

// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
// let Zevs = [12, 7, 95, true, 'M. Kalkin'];
// Zevs.shift();
// console.log(Zevs);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.
// let Aragorn = new Array(12);
// console.log(Aragorn);

// function Vitalik(Aragorn) {
// Aragorn.shift()
// return Aragorn
// }
// console.log(Vitalik(Aragorn));

// let Kaxachok = function (f) {
//     f.shift()
//     return f
// }
// console.log(Kaxachok(Aragorn));

// let Stone = (q) =>{
//     q.shift()
//     return q
// }
// console.log(Stone(Aragorn));





// fill:

// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
// let Montana = new Array(12, 56, 8, 54, 2, 5, 8, 9, 76543);
// console.log(Montana);
// Montana.fill('I`m just a virus!!!', 0, 1);
// console.log(Montana);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.
// let Indiana = new Array(9);
// console.log(Indiana);

// function Kentucy(I) {
//     return I.fill('La-la-la')
//     }
// console.log(Kentucy(Indiana));

// let emerald = function (Indiana) {
//     Indiana.fill(`Zumapel Garik`, 2, 4)
//     return Indiana
// }
// console.log(emerald(Indiana));

// let Rozetka = (j) =>{
//     j.fill('BMW')
//     return j
// }
// console.log(Rozetka(Indiana));




// splice:

// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
// let Socrat = [23, 5, 67, 98, 22, 45, 54, 32, 12, 6];
// Socrat.splice(2, 7, 'Klavdiia Petrivna');
// console.log(Socrat);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.
// let Georgia = [45, 67, 23, 43, 65, 45, 76, 67, , , , , 76, 45];
// console.log(Georgia);

// function Alaska(A) {
//    return A.splice(2, 3, 'Optimus');

// }
// console.log(Alaska(Georgia));
// console.log(Georgia);

// let Taras = function (t) {
//     t.splice(8-13)
//     return t
// }
// console.log(Taras(Georgia));


// let Amaretto =(g)=>{
//     g.splice(2, 9)
//     return g
// }
// console.log(Amaretto(Georgia));




// reverse:

// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
// let Minesota = new Array(45, 67, 23, 43, 65, 45, 76, 67, 76, 45);
// console.log(Minesota);
// Minesota.reverse();
// console.log(Minesota);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.
// let Rembo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Rembo);

// function Amazon(par) {
//   return par.reverse();
// }
// console.log(Amazon(Rembo));

// let batrack = function (v) {
//     v.reverse()
//     return v
// }
// console.log(batrack(Rembo));

// let Luba = (r)=>{
// r.reverse()
// return r
// }
// console.log(Luba(Rembo));



// concat:

// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
// let Boston = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Austyn = new Array(45, 67, 23, 43, 65, 45, 76, 67, 76, 45);
// let SunAntonio = Boston.concat(Austyn);
// console.log(SunAntonio);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.
// let Boston = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let Austyn = new Array(45, 67, 23, 43, 65, 45, 76, 67, 76, 45);

// function LosAngeles(B, A) {
//   let Detroit = B.concat(A)
//     return Detroit
// }
// console.log(LosAngeles(Boston, Austyn));

// let Beverly = function (n, m) {
//     let Paraska = n.concat(m)
//     return  Paraska
//     }
// console.log(Beverly(Boston, Austyn));

// let Robocop = (u, i) =>{
//     let Zoldiy = u.concat(i)
//     return Zoldiy
// }
// console.log(Robocop(Boston, Austyn));


// includes:

// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
// let Kansas = [45, 67, 23, 43, 65, 45, 76, 67, 'Novik', 76, 45];
// console.log(Kansas);

// let NewYork = Kansas.includes('Novik');
// console.log(NewYork);

// let Illinois = Kansas.includes('Ram');
// console.log(Illinois);


// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.
// let Arrey1 = [12, 67, 8, 'agamemnom', 93];
// let SomeElemet = 'Klavdija Petrivna';
// function Texas(qwerty, ytrewq) {
//     let Hanolulu = qwerty.includes(ytrewq);  
//     return Hanolulu
// }
// console.log(Texas(Arrey1, SomeElemet));

// let Babushka = function (l, k) {
//  let prapor = l.includes(k) 
//  return prapor  
// }
// console.log(Babushka(Arrey1, SomeElemet));

// let Kuzia = (e, w) =>{
//     let GTA = e.includes(w)
// return GTA
// }
// console.log(Kuzia(Arrey1, SomeElemet));



// filter:

// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
// let Kansas = [2, 12, 14, 45, 67, 23, 43, 65, 45, 76, 67, 76, 45];
// let SantaFe = Kansas.filter(num => num %2 === 0);
// console.log(SantaFe);


// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.
// let Austyn = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 67, 23, 43, 65, 45, 76, 67, 76, 45);
// function California(Aasdf) {
// let Arizona = Aasdf.filter(num => num %2 === 0);
// return Arizona
// }
// console.log(California(Austyn));

// let rybaty = function (y) {
//   let grypp = Austyn.filter(num => num %2 === 0)  
//   return grypp
// }
// console.log(rybaty(Austyn));

// let rak = (e) =>{
//     let Buzok = e.filter(num => num%2 === 0)
//     return Buzok
// }
// console.log(rak(Austyn));

// map:

// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
// let Garlem = [56, 32, 12, 89, 100];
// let NewOrlean = Garlem.map((A, B, C) => `Беремо число ${A} що знаходиться під номером ${B} у массиві ${C} і зводимо його у квадрат, отримавши ${A**2}`       )
// console.log(Garlem);
// console.log(NewOrlean);


// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення.
// let Garlem = [56, 32, 12, 89, 100];
// function NewYork(A) {
//   return A.map((item) => `Значення: ${item}`);
// }
// console.log(NewYork(Garlem));



