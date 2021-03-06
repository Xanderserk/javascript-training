// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ:
В задаче Анимированный круг находится код для анимации появления круга.

Давайте представим, что теперь нам нужен не просто круг, а круг с сообщением внутри. И сообщение должно появляться после анимации (когда круг достигнет своих размеров), иначе это будет некрасиво.

В том решении функция showCircle(cx, cy, radius) рисовала круг, но способа узнать, что всё нарисовано, не было.

Поэтому добавим в параметры колбэк: showCircle(cx, cy, radius, callback), который выполним, когда анимация будет завершена. Функция callback будет добавлять в наш круг <div> элемент с сообщением.

Посмотрите пример:

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
--- */
//РЕШЕНИЕ

/**
 * Вызывает функцию Circle с определенными параметрами .css и текстом.
 */
function launch() {
    Circle(150, 150, 100, 
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
function Circle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = `${cx}px`;
    div.style.top = `${cy}px`;
    div.className = 'circle';
    document.body.append(div);

    setTimeout(
        () => {
            div.style.width = `${radius * 2}px`;
            div.style.height = `${radius * 2}px`;
            div.addEventListener(
                'transitionend',
                /**
                 * Удаляет обработчик события зарегистрированный ранее (div.addEventListener())
                 */
                function handler() {
                    div.removeEventListener('transitionend', handler);
                    callback(div);
                }
            );
        }
    );
}