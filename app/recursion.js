function funcWorkTime(func, arg) {
    const start = new Date().getTime();
    func(arg);
    const end = new Date().getTime();
    console.log('funcWorkTime:', `${end - start}`, 'ms');
}

/* Задача 1
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ...  }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? ===> на движке Chrome больше 10к операций выдаст ошибку переполненности стека операций.
*/
//РЕШЕНИЕ

// Вариант 1
/**
 * Вычисляет сумму чисел 1 + 2 + ... + n через цикл
 * @param {*} n 
 */
/*
function sumTo(n) {
    let sum = 0;
    for (let i = 1; n >= i; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(10000));
funcWorkTime(sumTo, 10000);
*/


// Вариант 2
/**
 * Вычисляет сумму чисел 1 + 2 + ... + n через рекурсию
 * @param {*} n 
 */
/*
/*
function sumTo(n) {
    return (n === 1)
        ? n
        : n = n + sumTo(n-1);
}

console.log(sumTo(10000));
funcWorkTime(sumTo, 10000);
*/

// Вариант 3
/**
 * Вычисляет сумму чисел 1 + 2 + ... + n через арифметическую прогрессию
 * @param {*} n 
 */
function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(10000));
funcWorkTime(sumTo, 10000);

/* Задача 2
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/
//РЕШЕНИЕ
/**
 * Возвращает n! через рекурсию
 * @param {*} n 
 */
function factorial(n) {
    return (n === 1)
        ? n
        : n = n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(5));

/* Задача 3
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) { /* ваш код  }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
*/
//РЕШЕНИЕ

//Вариант 1
/**
 * Возвращает n-е число Фибоначчи (рекурсия)
 * @param {*} n 
 */

function fib(n) {
    return (n <= 1) 
        ? n 
        : fib(n - 1) + fib(n - 2);
}

// console.log(fib(40));
funcWorkTime(fib, 40);


//Вариант 2
/**
 * Возвращает n-е число Фибоначчи
 * @param {*} n 
 */
/*
function fib(n) {
    if (n === 0) { // проверки на n === 0, n === 1 и n === 2 нужны, чтобы функция корректно работала с этими вариантами значений. (Без этого кода она выдаст undefined)
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        let numberFib;
        let arr = [1, 1];
        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
            numberFib = arr[i];
        }
        return numberFib;
    }
}

console.log(fib(77));
funcWorkTime(fib, 77);
*/

//Вариант 3
/**
 * Возвращает n-е число Фибоначчи (вариант 2, только проще)
 * @param {*} n 
 */
/*function fib(n) {
    let f0 = f1 = 1;
    for (let i = 3; n >= i; i++) {
        let fN = f0 + f1;
        f0 = f1;
        f1 = fN;
    }
    return f1;
}

console.log(fib(77));
funcWorkTime(fib, 77);
*/
/* Задача 4
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/
//РЕШЕНИЕ

// Вариант 1

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

/**
 * Выводит элементы списка по одному (через цикл)
 * @param {*} list 
 */
/*
function printList(list) {
    let listCopy = list;
    while(listCopy) {
        console.log(listCopy.value);
        listCopy = listCopy.next;
    }
}

printList(list);
funcWorkTime(printList, list);
*/

//Вариант 2
/**
 * Выводит элементы списка по одному (через рекурсию)
 * @param {*} list 
 */
function printList(list) {
    console.log(list.value);
    if (list.next) printList(list.next);
}

printList(list);
funcWorkTime(printList, list);

/* Задача 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/
//РЕШЕНИЕ

//Вариант 1
/**
 * Вывод односвязного списка в обратном порядке (через цикл)
 * @param {*} list 
 */
/*
function prevPrintList(list) {
    let listCopy = list;
    let arr = [];
    let listLength;

    while(listCopy) {
        arr.push(listCopy.value);
        listCopy = listCopy.next;
        listLength = arr.length;
    }

    for (let i = listLength - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

prevPrintList(list);
funcWorkTime(prevPrintList, list);
*/

//Вариант 2
/**
 * Вывод односвязного списка в обратном порядке (через рекурсию)
 * @param {*} list 
 */
 function prevPrintList(list) {
    if (list.next) prevPrintList(list.next);
    console.log(list.value);
}

prevPrintList(list);
funcWorkTime(prevPrintList, list);