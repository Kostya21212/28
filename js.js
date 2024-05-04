class SuperMath {
    constructor() {}
  
    check(obj) {
      const { X, Y, znak } = obj;
      const validOperators = ['+', '-', '/', '*', '%'];
  
      if (!validOperators.includes(znak)) {
        console.log('Некоректний знак операції. Введіть один з наступних: + - / * %');
        this.input();
        return;
      }
  
      const confirmation = prompt(`Ви хочете зробити операцію ${znak} з числами ${X} і ${Y}? (Так/Ні)`);
  
      if (confirmation.toLowerCase() === 'так') {
        const result = this.calculate(X, Y, znak);
        console.log(`Результат операції ${X} ${znak} ${Y} = ${result}`);
      } else {
        this.input();
      }
    }
  
    input() {
      const X = parseFloat(prompt('Введіть число X:'));
      const Y = parseFloat(prompt('Введіть число Y:'));
      const znak = prompt('Введіть операцію (+ - / * %):');
  
      this.check({ X, Y, znak });
    }
  
    calculate(X, Y, znak) {
      const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
        '%': (a, b) => a % b
      };
  
      if (operations.hasOwnProperty(znak)) {
        return operations[znak](X, Y);
      } else {
        return NaN;
      }
    }
  }
  
  const superMath = new SuperMath();
  superMath.check({ X: 12, Y: 3, znak: '/' });
  