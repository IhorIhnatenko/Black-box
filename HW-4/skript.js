// 1. Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

// let firstNumber = prompt('Введіть перше число');
// let secondNumber = prompt('Введіть друге число');   
// let thirdNumber = prompt('Введіть третє число');
// if (firstNumber > secondNumber && firstNumber > thirdNumber) {console.log(`Найбільше число: ${firstNumber}`);}
// else if (secondNumber > firstNumber && secondNumber > thirdNumber) {console.log(`Найбільше число: ${secondNumber}`);}
// else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {console.log(`Найбільше число: ${thirdNumber}`);}
// else if (firstNumber == secondNumber && firstNumber == thirdNumber) {console.log(`Всі числа однакові: ${firstNumber}`);}
// else if (firstNumber == secondNumber) {console.log(`Два числа однакові: ${firstNumber} та ${secondNumber}`);}
// else if (firstNumber == thirdNumber) {console.log(`Два числа однакові: ${firstNumber} та ${thirdNumber}`);}
// else if (secondNumber == thirdNumber) {console.log(`Два числа однакові: ${secondNumber} та ${thirdNumber}`);}    






// 2. Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

// let monthNumber = prompt('Введіть номер місяця (від 1 до 12)');
// if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {console.log(`Цей місяць належить до зими`);}
// else if (monthNumber == 3 || monthNumber == 4 || monthNumber == 5) {console.log(`Цей місяць належить до весни`);} 
// else if (monthNumber == 6 || monthNumber == 7 || monthNumber == 8) {console.log(`Цей місяць належить до літа`);}
// else if (monthNumber == 9 || monthNumber == 10 || monthNumber == 11) {console.log(`Цей місяць належить до осені`);}
// else if (monthNumber < 1 || monthNumber > 12) {console.log(`Ви ввели не вірне число. Введіть число від 1 до 12`);}
// else {console.log(`Ви ввели не число`);}





// 3. Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

// let youeNomber = prompt('Введіть будь-яке число');
// if (youeNomber > 0) {console.log(`Це число додатнє`);}
// else if (youeNomber < 0) {console.log(`Це число від'ємне`);}
// else if (youeNomber == 0) {console.log(`Це число нуль`);}
// else {console.log(`Ви ввели не число`);}





// 4. Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

// let angle = prompt('Введіть величину кута в градусах');
// let result = (angle > 0 && angle < 90) ? 'Гострий кут' : 
// (angle == 90) ? 'Прямий кут' : 
// (angle > 90 && angle < 180) ? 'Тупий кут' : 
// (angle > 179 && angle < 360) ? 'Розгорнутий кут' : 
// (angle == 360) ? 'Це повний оберт': 
// (angle > 360) ? 'Ви ввели не вірне число' : 
// 'Ви ввели не число';
// console.log(`Ваша величина кута: ${result}`);






// 5. Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

// let Mark = prompt('Введіть свою оцінку за тест (від 0 до 100)');
// let result = (Mark >= 90 && Mark <= 100) ? 'A' :
// (Mark >= 80 && Mark < 90) ? 'B' :   
// (Mark >= 70 && Mark < 80) ? 'C' :
// (Mark >= 60 && Mark < 70) ? 'D' :
// (Mark < 60 && Mark >= 0) ? 'F' :
// (Mark > 100) ? 'Ви ввели не вірне число' :
// 'Ви ввели не число';
// console.log(`Ваша оцінка до інуремента: ${result}`);
// Mark++; 

// result = (Mark >= 90 && Mark <= 100) ? 'A' :
// (Mark >= 80 && Mark < 90) ? 'B' :   
// (Mark >= 70 && Mark < 80) ? 'C' :
// (Mark >= 60 && Mark < 70) ? 'D' :
// (Mark < 60 && Mark >= 0) ? 'F' :
// (Mark > 100) ? 'Ви ввели не вірне число' :
// 'Ви ввели не число';
// console.log(`Ваша оцінка після інкремента: ${result}`);
// let result2 = (Mark >= 60) ? 'Ви зараховані' : 'Ви не зараховані';  
