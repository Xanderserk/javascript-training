/* Задача 1
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
//РЕШЕНИЕ

let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
};

//Вариант 1
/*
function sumSalaries(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}

console.log(sumSalaries(salaries));
*/

//Вариант 2
/*
function sumSalaries(obj) {
    let sum = 0;
    companyArr = Object.values(obj);
    companyArr.forEach(value => {
        sum += value;
    });
    return sum;
}

console.log(sumSalaries(salaries));
*/

//Вариант 3
function sumSalaries(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

console.log(sumSalaries(salaries));

/* Задача 2
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/
//РЕШЕНИЕ

let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));