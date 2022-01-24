/* Задача 1
Проверка синтаксиса
Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}
 тут нужна ;
(user.go)() будет ошибка, нужна ; выше.
*/

/*Задача 2
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object] - это обычный вызов метода. Он отработал.

(obj.go)();             // (2) [object Object] - тоже обычный вызов метода. Скобки меньше чем точка, поэтому вызов сработал.

(method = obj.go)();    // (3) undefined - в теории он работает, но из-за использования use strict он не сработал, т.к. потеряли this из obj.go

(obj.go || obj.stop)(); // (4) undefined - то же, что и в (3).
*/

/*Задача 3
Здесь функция makeUser возвращает объект.
Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? - КОгда дойдет сюда, this станет undefined => будет ошибка. Если бы использовали ref(), то сработало бы.
*/

/* Задача 4
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
let calculator = {
    read() {
        this.a = +prompt('a?', ' ');
        this.b = +prompt('b?', ' ');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

/* Задача 5
Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep(); // 1
Такой подход широко используется в библиотеках JavaScript.
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { 
      alert( this.step );
      return this;
    }
  }