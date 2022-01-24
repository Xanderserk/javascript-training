/* Задача 1
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
*/
function ucFirst(userWord) {
    let userWord = prompt('Ваше слово: ', 'word');
    if (!userWord) return userWord;
    return `${userWord[0].toUpperCase()}${userWord.slice(1)}`;
}

/* Задача 2
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
function checkSpam(str) {
    let str = prompt('Слова для проверки: ', 'buy ViAgRA now');
    if (!str) return str;
    let lowStr = str.toLowerCase();
    return lowStr.includes('viagra') || lowStr.includes('xxx');
}

/* Задача 3
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/
function truncate(str, maxlenght) {
    let str = prompt('Введите текст для обрезки: ', 'Если бы у бабушки были колёсики');
    if (!str) return str;
    return (str.length > maxlength)
        ? `${str.slice(0, maxlength - 1)}…`
        : str;
}

/* Задача 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/
function extractCurrencyValue(str) {
    let str = prompt('Введите стоимость: ', '$120');
    if (!str) return str;
    return +str.slice(1);
}