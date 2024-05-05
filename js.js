class SuperMath {
  check(obj) {
      const { X, Y, znak } = obj;
      const isValidOperation = ['+', '-', '/', '*', '%'].includes(znak);
      if (!isValidOperation) {
          console.log('Неправильна операція.');
          return this.input();
      }
      
      const confirmation = prompt(`Бажаєте виконати операцію ${znak} над ${X} та ${Y}? (так/ні): `);
      if (confirmation.toLowerCase() === 'так') {
          return eval(`${X} ${znak} ${Y}`);
      } else {
          return this.input();
      }
  }

  input() {
      const X = parseFloat(prompt("Введіть X:"));
      const Y = parseFloat(prompt("Введіть Y:"));
      const znak = prompt("Введіть знак (+ - / * %):");
      return this.check({ X, Y, znak });
  }
}

// Приклад використання
const superMath = new SuperMath();
const result = superMath.check({ X: 12, Y: 3, znak: "/" });
console.log("Результат:", result);
