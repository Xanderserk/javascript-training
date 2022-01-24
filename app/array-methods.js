/* Задача 1
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/
//РЕШЕНИЕ

function camelize(str) {
    let arr = str.split('-');
    let arrUppercase = arr.map(item => `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`);
    let trueArr = arrUppercase.join('');
    console.log(trueArr);
}

camelize('background-color');
camelize('list-style-image');
camelize('-webkit-transition');

/* Задача 2
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.

Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/
//РЕШЕНИЕ

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    let arrCopy = arr.filter(item => (a <= item && item <= b));
    return arrCopy;
}

console.log(filterRange(arr, 1, 4));
console.log(arr);

/*Задача 3
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
*/
//РЕШЕНИЕ

let numbers = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    arr.forEach((number, index) => {
        if (number <= a || number >= b) {
            arr.splice(index, 1);
        }
    });
}

filterRangeInPlace(numbers, 1, 4);
console.log(numbers);

/*Задача 4
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10
*/
//РЕШЕНИЕ

let numbersArray = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(numbersArray);

/*Задача 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/
//РЕШЕНИЕ

let arrString = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let copyArr = arrString.slice();
    return copyArr.sort();
}

let sorted = copySorted(arrString);

console.log(sorted);
console.log(arrString);

/*Задача 6
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/
//РЕШЕНИЕ

//Вариант 1
/*function Calculator() {
    this.newOperations = {};
    this.addMethod = function(operation, func) {
        this.newOperations[operation] = func;
    };
    this.calculate = function(str) {
        [a, operation, b] = str.split(' ');

        if (operation === '+') {
          return +a + +b;
        }
        if (operation === '-') {
          return +a - +b;
        }
        if (operation in this.newOperations) {
          return this.newOperations[operation](+a, +b);
        }
      };
}
let calc = new Calculator;
console.log(calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);
*/

//Вариант 2
function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };
    this.addMethod = function(operation, func) {
        this.operations[operation] = func;
    };
    this.calculate = function(str) {
        [a, operation, b] = str.split(' ');
        if (operation in this.operations) {
            return this.operations[operation](+a, +b);
        };
    };
}
let calc = new Calculator;
console.log(calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);

/*Задача 7
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = ... ваш код
alert( names ); // Вася, Петя, Маша
*/
//РЕШЕНИЕ

let vasya = {name: 'Вася', age: 25};
let petya = {name: 'Петя', age: 30};
let masha = {name: 'Маша', age: 28};
let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names);

/*Задача 8
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
Например:
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
let usersMapped = ... ваш код ... 
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.
*/
//РЕШЕНИЕ

let pete = {name: 'Пит', surname: 'Смит', id: 1};
let vova = {name: 'Вова', surname: 'Ковачин', id: 2};
let olya = {name: 'Оля', surname: 'Сидорова', id: 3};
let usersFull = [pete, vova, olya];

let usersMapped = usersFull.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

/* Задача 9
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];
sortByAge(arr);
// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/
//РЕШЕНИЕ

let john = {name: 'John', age: 26};
let matt = {name: 'Matt', age: 31};
let helen = {name: 'Helen', age: 28};

let usersAge = [john, matt, helen];

function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(usersAge);
console.log(usersAge[0].name);
console.log(usersAge[1].name);
console.log(usersAge[2].name);

/* Задача 10
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность.
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/
//РЕШЕНИЕ

function shuffle(array) {
    for (let shuffleLenght = array.length; shuffleLenght--;) {
        let shuffleRandomize = array.splice(
            Math.floor(Math.random() * (shuffleLenght + 1)),
            1,
        );
        array.push(shuffleRandomize[0]);
    }
}

let numbersArr = [1, 2, 3];
shuffle(numbersArr);
console.log(numbersArr);
shuffle(numbersArr);
console.log(numbersArr);
shuffle(numbersArr);
console.log(numbersArr);
shuffle(numbersArr);
console.log(numbersArr);

/* Задача 11
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/
//РЕШЕНИЕ

function getAverageAge(users) {
    let averageResult = users.reduce((earlyAge, user) => earlyAge + user.age, 0) / users.length; 
    return averageResult;
}

let nameOne = {name: 'One', age: 25};
let nameTwo = {name: 'Two', age: 30};
let nameThree = {name: 'Three', age: 29};
let arrForAverage = [nameOne, nameTwo, nameThree];

console.log(getAverageAge(arrForAverage));

/* Задача 12
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
Например:
function unique(arr) {
  ваш код
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
alert( unique(strings) ); // кришна, харе, :-O
*/
//РЕШЕНИЕ

function unique(arr) {
    let boxResult = [];
    for (let item of arr) {
        if (!boxResult.includes(item)) {
            boxResult.push(item);
        }
    }
    return boxResult;
}

let strings = ['кришна', 'кришна', 'харе', 'харе',
'харе', 'харе', 'кришна', 'кришна', ':-O'
];
console.log(unique(strings));