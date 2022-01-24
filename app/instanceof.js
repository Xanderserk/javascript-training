// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ:
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
--- */

//РЕШЕНИЕ
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();
console.log(a instanceof B); // ----> instanceof сравнивает прототипы, который в данном случае одинаковые, а не функции-конструкторы.