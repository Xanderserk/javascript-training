/* Задача 1
Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

function makeCounter() {
    let count = 0;
  
    // ... ваш код ...
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
*/
//РЕШЕНИЕ
/**
 * Устанавливает значения счетчика
 */
function makeCounter() {
    let count = 0;
    /**
     * Увеличивает значение счетчика
     */
    function counter() {
        return count++;
    }

    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10); // установить новое значение счётчика
console.log(counter()); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 10 (вместо 11)

/* Задача 2
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/
//РЕШЕНИЕ
/**
 * Считает (a) + (b) + (c) + ...(n)
 * @param {*} a 
 */
function sum(a) {
    let resultSum = (b) => sum(a + b);
    resultSum.toString = () => a;
    return resultSum;
}

console.log(sum(1)(2));
console.log(sum(1)(5)(7));