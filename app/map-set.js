/* Задача 1
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:
function unique(arr) {
  /* ваш код 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений.
*/
//РЕШЕНИЕ

function unique(arr) {
    let rareValue = new Set(arr);
    return rareValue;
}

let strings = ['кришна', 'кришна', 'харе', 'харе',
'харе', 'харе', 'кришна', 'кришна', ':-O'
];
console.log(unique(strings));

/* Задача 2
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:
nap - pan
ear - are - era
cheaters - hectares - teachers

Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
//РЕШЕНИЕ

function aclean(arr) {
    let sortedBox = new Map();
    arr.forEach(item => {
        let sorted = item.toLowerCase().split('').sort().join('');
        sortedBox.set(sorted, item);
    });
    return Array.from(sortedBox.values());
}

let anagramArr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(anagramArr));

/* Задача 3
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/
//РЕШЕНИЕ

let keysBox = new Map();
keysBox.set('name', 'John');
let keys = Array.from(keysBox.keys());
keys.push('more');
console.log({keys});