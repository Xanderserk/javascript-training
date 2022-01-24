/* Задача 1
Что выведет функция?

function f() {
    console.log(this);
}

let user = {
    g: f.bind(null) // привязка null к this
};

user.g(); // null
*/

/* Задача 2
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
    console.log(this.name);
}

f = f.bind({name: 'Вася'}).bind({name: 'Петя'}); // учитывается только первая привязка, вторая изменяет контекст для объекта. Вася.
f();
*/

/* Задача 3
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
    console.log(this.name);
}
sayHi.test = 5; //изменил свойство объекта на test

let bound = sayHi.bind({
    name: 'Вася' // свойства name уже нет
});

console.log(bound.test); // undefined
*/

/* Задача 4
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password === 'rockstar') ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk, user.loginFail);
*/
//РЕШЕНИЕ

function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password === 'rockstar') ok();
    else fail();
}
  
let user = {
    name: 'Вася',
  
    loginOk() {
        console.log(`${this.name} logged in`);
    },
  
    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
  
};
  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

/* Задача 5
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую 'this'.

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password === 'rockstar') ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(?, ?); // ?
Ваши изменения должны затрагивать только выделенный фрагмент кода.
*/
//РЕШЕНИЕ
function askPassword(ok, fail) {
    let password = prompt('Password?', '');
    if (password === 'rockstar') ok();
    else fail();
}
  
let user = {
    name: 'John',
    login(result) {
        console.log(this.name + (result 
            ? ' logged in'
            : ' failed to log in'
        ));
    }
};
  
askPassword(user.login.bind(user, true), user.login.bind(user, false));