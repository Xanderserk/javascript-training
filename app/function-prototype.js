// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ + РЕШЕНИЕ:
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
console.log(rabbit.eats); // true

Добавим одну строчку (выделенную в коде ниже). Что вызов console.log покажет нам сейчас?
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype = {};
console.log(rabbit.eats); ----> true

…А если код такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats); ----> false

Или такой (заменили одну строчку)?
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
delete rabbit.eats;
console.log(rabbit.eats); ----> true

Или, наконец, такой:
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
delete Rabbit.prototype.eats;
console.log(rabbit.eats); ----> undefined
--- */

// ЗАДАЧА 2

/* --- УСЛОВИЕ ЗАДАЧИ:
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
--- */

// РЕШЕНИЕ

// Вариант, когда сработает
/**
 * Функция-конструктор для объекта 
 * @param {*} number 
 */
function Numbers(number) {
    this.number = number;
}

let first = new Numbers(1);
let second = first.constructor(2);

// Вариант, когда не сработает
/**
 * Функция-конструктор для объекта
 * @param {*} user 
 */
function Users(user) {
    this.user = user;
}

Users.prototype = {};

let john = new Users('John');
let bob = john.constructor('Bob');