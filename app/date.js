/* Задача 1
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.
*/
//РЕШЕНИЕ

let date = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(date);

/* Задача 2
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/
//РЕШЕНИЕ

/**
 * Показывает день недели в коротком формате
 * @param {*} randomDate 
 */
function getWeekDay(randomDate) {
    days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[randomDate.getDay()];
}

let randomDate = new Date(2012, 0, 3);
console.log(getWeekDay(randomDate));

/* Задача 3
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/
//РЕШЕНИЕ

/**
 *  Возвращает день недели в европейском формате
 * @param {*} europeDate 
 */
function getLocalDay(europeDate) {
    let day = europeDate.getDay();
    if (day === 0 ) {
        day = 7;
    }
    return day;
}

let europeDate = new Date(2012, 0, 3);
console.log(getLocalDay(europeDate));

/* Задача 4
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/
//РЕШЕНИЕ

/**
 * Возвращает число, которое было days дней назад от даты date
 * @param {*} yourDate 
 * @param {*} days 
 */
function getDateAgo(yourDate, days) {
    let yourCopyDate = yourDate;
    yourCopyDate.setDate(yourCopyDate.getDate() - days);
    return yourCopyDate;
}

let yourDate = new Date(2015, 0, 2);
console.log(getDateAgo(yourDate, 1));
console.log(getDateAgo(yourDate, 2));
console.log(getDateAgo(yourDate, 365));

/* Задача 5
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
//РЕШЕНИЕ

/**
 * возвращает последнее число месяца
 * @param {*} year 
 * @param {*} month 
 */
function getLastDayOfMonth(year, month) {
    let days = new Date(year, +month + 1, 0).getDate();
    return days;
}

console.log(getLastDayOfMonth(2012, 0));
console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2012, 2));
console.log(getLastDayOfMonth(2012, 3));
console.log(getLastDayOfMonth(2012, 4));
console.log(getLastDayOfMonth(2012, 5));
console.log(getLastDayOfMonth(2012, 6));
console.log(getLastDayOfMonth(2012, 7));
console.log(getLastDayOfMonth(2012, 8));
console.log(getLastDayOfMonth(2012, 9));
console.log(getLastDayOfMonth(2012, 10));
console.log(getLastDayOfMonth(2012, 11));

/* Задача 6
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
//РЕШЕНИЕ

/**
 * Возвращает количество секунд с начала сегодняшнего дня
 * @returns 
 */
function getSecondsToday() {
    let hourSeconds = 3600;
    let date = new Date().getHours();
    return date * hourSeconds;
}

console.log(getSecondsToday());

/* Задача 7
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/
//РЕШЕНИЕ

/**
 * Возвращает количество секунд до завтрашней даты
 * @returns 
 */
 function getSecondsToTomorrow() {
    let hourSeconds = 3600;
    let hoursInADay = 3600 * 24;
    let date = new Date().getHours();
    return hoursInADay - (date * hourSeconds);
}

console.log(getSecondsToTomorrow());

/* Задача 8
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/
//РЕШЕНИЕ

/**
 * Форматирует date по определенному принципу
 * @param {*} date 
 */
function formatDate(date) {
    let badYear = date.getFullYear();
    let year = (badYear.toString().slice(-2));
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let secInMin = 60;
    let millInSec = 1000;
    let newMS = (new Date() - date);
    let newSec = Math.round(newMS / millInSec);
    let newMin = newSec / secInMin;
    let newHour = newMin / secInMin;

    let answer = (newSec < 1) 
        ? 'NOW!'
        : newMin < 1
            ? `${newSec} sec. ago`
            : (newHour < 1)
                ? `${newMin} min. ago`
                : `${`${day}`.padStart(2, '0')}
                .${`${month}`.padStart(2, '0')}
                .${year} 
                ${`${hour}`.padStart(2, '0')}
                :${`${minutes}`.padStart(2, '0')}`
    return answer;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 5 * secInMin * millInSec)));
console.log(formatDate(new Date(new Date - 30 * millInSec)));
console.log(formatDate(new Date(new Date - 86400 * millInSec)));