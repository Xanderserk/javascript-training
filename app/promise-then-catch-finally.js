// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ:
Что выведет код ниже?

let promise = new Promise(
    function(resolve, reject) {
        resolve(1);

        setTimeout(
            () => resolve(2),
            1000
        );
    }
);

promise.then(alert); // ----> 1, т.к. 2 будет проигнорирован.
--- */

// ЗАДАЧА 2

/* --- УСЛОВИЕ ЗАДАЧИ:
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
--- */
//РЕШЕНИЕ

console.log('ЗАДАЧА 2');

function delay(ms) {
    return new Promise(
        resolve => setTimeout(
            resolve,
            ms
        )
    );
}

delay(3000).then(
    () => console.log('выполнилось через 3 секунды')
);

// ЗАДАЧА 3

/* --- УСЛОВИЕ ЗАДАЧИ:
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис,
вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
Возьмите решение из Анимация круга с помощью колбэка в качестве основы.
--- */
//РЕШЕНИЕ

/**
 * Вызывает функцию Circle с определенными параметрами .css и текстом (реализация через .then)
 */
function launch() {
    Circle(150, 150, 100).then(
        div => {
            div.classList.add('circle-message');
            div.append('Welcome to callbacks!');
        }
    );
}

/**
 *  Рисует круг с заданными параметрами .css
 * @param {*} cx 
 * @param {*} cy 
 * @param {*} radius 
 * @param {*} callback 
 */
function Circle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = `${cx}px`;
    div.style.top = `${cy}px`;
    div.className = 'circle';
    document.body.append(div);


    return new Promise(
        resolve => {
            setTimeout(
                () => {
                    div.style.width = `${radius * 2}px`;
                    div.style.height = `${radius * 2}px`;
                },
                1000
            );
            div.addEventListener(
                'transitionend', 
                () => resolve(div)
            ); 
        }
    )
}