// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ:
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
    console.log('Hello!');
}

f.defer(1000); // выведет 'Hello!' через 1 секунду
--- */

//РЕШЕНИЕ

console.log('ЗАДАЧА 1');

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

function f() {
    console.log('Hello!');
}

f.defer(1000);

// ЗАДАЧА 2

/* --- УСЛОВИЕ ЗАДАЧИ:
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
--- */

//РЕШЕНИЕ

console.log('ЗАДАЧА 2');

Function.prototype.defer = function (ms) {
    return function wrapper(...args) {
        setTimeout(() => func.apply(this, args), ms);
    };
}

function func(a, b) {
    console.log(a + b);
}

func.defer(1000)(1, 2);