// ЗАДАЧА 1

/* --- УСЛОВИЕ ЗАДАЧИ:
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

function Clock({ template }) {
  
    let timer;
  
    function render() {
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
  
        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
  
        console.log(output);
    }
  
    this.stop = function() {
        clearInterval(timer);
    };
  
    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };
  
}
  
let clock = new Clock({template: 'h:m:s'});
clock.start();

P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.
--- */
//РЕШЕНИЕ

console.log('ЗАДАЧА 1');

class newClock {
    constructor(options) {
        this.template = options.template;
    }

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = `0${hours}`;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = `0${mins}`;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = `0${secs}`;
    
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };

    stop() {
        clearInterval(this.timer);
    };
}

let clock = new newClock({ template: 'h:m:s' });
clock.start();