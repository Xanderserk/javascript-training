/* Задача 1
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
*/
//РЕШЕНИЕ

//Вариант 1
/**
 * Выводит число каждую секунду, начиная от from и заканчивая to (реализация через setInterval)
 * @param {*} from 
 * @param {*} to 
 */
/*
function printNumbers(from, to) {
    if (from <= to) {
        let printTimer = setInterval(
            function() {
                (from <= to)
                    ? console.log(from++)
                    : clearInterval(printTimer);
            },
            1000
        ); 
    } else {
        let printTimer = setInterval(
            function() {
                (from >= to)
                    ? console.log(from--)
                    : clearInterval(printTimer);
            },
            1000
        ); 
    }
}

printNumbers(1, 5);
printNumbers(5, 1);
*/

//Вариант 2
/**
 * Выводит число каждую секунду, начиная от from и заканчивая to (реализация через setTimeout)
 * @param {*} from 
 * @param {*} to 
 */
function printNumbers(from, to) { 
    if (from <= to) {
        setTimeout(
            function func() {
                console.log(from++);
                if (from <= to) {
                    setTimeout(func, 1000);
                };
            },
            1000
        );
    } else {
        setTimeout(
            function func() {
                console.log(from--);
                if (from >= to) {
                    setTimeout(func, 1000);
                };
            },
            1000
        );
    }
}

printNumbers(1, 5);
printNumbers(5, 1);

/* Задача 2
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
Когда будет выполнена запланированная функция?

После цикла. +
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // 100000000. Всё просто, планировщик по приоритету сначала прогоняет весь код, и только потом переключается на функции.
Для функции в таймере правило не исключение, так что тут без вариантов.

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
*/