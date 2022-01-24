/*
Задача 1
Выведется ли alert?
if ('0') {
  alert( 'Привет' ); (да, выведет, т.к. '0' - это не 0 и не false)
}
*/

/*
Задача 2
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/
let nameJS = prompt('Какое "официальное" название JavaScript?', '?');
if (nameJS === 'ECMAScript') {
    console.log('Правильно!');
} else {
        console.log('Не знаете? "ECMAScript"!');
    }

//альтернатива

let nameJS = prompt('Какое "официальное" название JavaScript?', '?');
let message = (nameJS === 'ECMAScript')
    ? console.log('Правильно!')
    : console.log('Не знаете? "ECMAScript"!');

/*
Задача 3
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/
let userCount = +prompt('Введите число', '');
if (userCount > 0) {
    console.log('1');
} else if (userCount < 0) {
        console.log('-1');
    } else {
            console.log('0');
        };

//альтернатива

let userCount = +prompt('Введите число', '');
let message = userCount > 0
    ? console.log('1')
    : userCount < 0
        ? console.log('-1')
        : console.log('0');

/*
Задача 4
Перепишите конструкцию if с использованием условного оператора '?':
let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/
let result = a + b < 4
    ? 'Мало'
    : 'Много';

/*
Задача 5
Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.
let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/
let message = (login === 'Сотрудник')
    ? message = 'Привет'
    : (login === 'Директор')
        ? message = 'Здравствуйте'
        : message = 'Нет логина';