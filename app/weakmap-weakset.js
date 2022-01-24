/*Задача 1
Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?».
Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. 
Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.
*/
//РЕШЕНИЕ

let messages = [
    {text: 'Hello', from: 'John'},
    {text: "How goes?", from: 'John'},
    {text: 'See you soon', from: 'Alice'}
];

let readUsersMessages = new WeakSet();
readUsersMessages.add(messages[0]);
readUsersMessages.add(messages[1]);
console.log(readUsersMessages.has(messages[0]));
console.log(readUsersMessages.has(messages[1]));
console.log(readUsersMessages.has(messages[2]));

/*Задача 2
Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». 
Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.
*/
//РЕШЕНИЕ

let userMessages = [
    {text: 'Hello', from: 'John'},
    {text: "How goes?", from: 'John'},
    {text: 'See you soon', from: 'Alice'}
];

let readDateUserMessages = new WeakMap();
readDateUserMessages.set(userMessages[0], new Date(2021, 7, 25, 13, 58, 25));
readDateUserMessages.set(userMessages[1], new Date(2021, 7, 25, 14, 02, 11));
console.log(readDateUserMessages);