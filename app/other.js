// ЗАДАЧА 1 (УРОК: ГЕНЕРАТОРЫ)

/* --- УСЛОВИЕ ЗАДАЧИ:
Есть много областей, где нам нужны случайные данные.

Одной из них является тестирование. Нам могут понадобиться случайные данные: текст, числа и т.д., чтобы хорошо всё проверить.

В JavaScript мы можем использовать Math.random(). Но если что-то пойдёт не так, то нам нужно будет перезапустить тест, используя те же самые данные.

Для этого используются так называемые «сеяные псевдослучайные генераторы».
Они получают «зерно», как первое значение, и затем генерируют следующее, используя формулу.
Так что одно и то же зерно даёт одинаковую последовательность, и, следовательно, весь поток легко воспроизводим.
Нам нужно только запомнить зерно, чтобы воспроизвести последовательность.

Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:

next = previous * 16807 % 2147483647
Если мы используем 1 как зерно, то значения будут:

16807
282475249
1622650073
…и так далее…
Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

Пример использования:

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
--- */
//РЕШЕНИЕ
console.log('ЗАДАЧА 1 (ГЕНЕРАТОРЫ)');
/**
 * Создаёт генератор с указанной формулой
 * @param {*} n 
 */
function* pseudoRandom(seed = 5) {
    while (true) {
        let next = seed * 16807 % 2147483647;
        yield seed = next;
    }
}

let generator = pseudoRandom();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// ЗАДАЧА 1 (УРОК: PROXY)

/* --- УСЛОВИЕ ЗАДАЧИ:
Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.

Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.

Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      /* ваш код 
    });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует
--- */

//РЕШЕНИЕ

console.log('ЗАДАЧА 1 (PROXY)');

let users = {
    name: 'John'
};
  
function wrap(target) {
    return new Proxy(
        target,
        {
            set (target, prop, value) {
                if (prop in target) {
                    return target[prop] = value
                } else {
                    throw new Error(`No ${prop} in target`)
                }
            }
        }
    );
}
  
  users = wrap(users);
  
  console.log(users.name);
  console.log(users.age);

// ЗАДАЧА 2 (УРОК: PROXY)

/* --- УСЛОВИЕ ЗАДАЧИ:
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

Вот так:

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего
Другими словами, array[-N] – это то же, что и array[array.length - N].

Создайте прокси, который реализовывал бы такое поведение.

Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
   ваш код 
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений
--- */

//РЕШЕНИЕ

console.log('ЗАДАЧА 2 (PROXY)');

let array = [1, 2, 3];

arr = new Proxy(
    array,
    {
        get (target, prop) {
            if (prop < 0) {
                prop = +prop + target.length;
            }
            return target[prop]
        }
    }
);

console.log(arr[-1]);
console.log(arr[-2]);

// ЗАДАЧА 3 (УРОК: PROXY)

/* --- УСЛОВИЕ ЗАДАЧИ:
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

Вот как это должно работать:

function makeObservable(target) {
  ваш код 
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.
--- */

//РЕШЕНИЕ

console.log('ЗАДАЧА 3 (PROXY)');

let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function (handler) {
        this[handlers].push(handler);
    };

    return new Proxy(
        target, 
        {
            set (target, property, value) {
                let success = Reflect.set(...arguments);
                if (success) {
                    target[handlers]
                        .forEach(
                            handler => handler(property, value)
                        );
                }
                return success;
            }
        }
    )
}

let user = {};

user = makeObservable(user);

user.observe(
    (key, value) => {
        console.log(`SET ${key} = ${value}`);
    }
);

user.name = "John";