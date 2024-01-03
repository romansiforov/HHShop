document.write(`
Технічне завдання: Програма для супермаркету на JavaScript<br>
Мета завдання:
Створити програму для супермаркету, що дозволяє генерувати продукти та формувати чеки покупок за допомогою прототипів та конструкторів в JavaScript.<br>

Вимоги:<br>
1. Створення конструктора для продуктів:<br>
   - Створіть конструктор, що дозволяє створювати об'єкти продуктів. Кожен продукт має мати наступні властивості: назва, ціна, кількість одиниць.<br>
2. Прототип для обчислення вартості продуктів:<br>
   - Додайте метод до прототипу продукту, який розраховує загальну вартість продукту в залежності від кількості одиниць.<br>
3. Створення об'єктів продуктів:<br>
   - Створіть кілька об'єктів продуктів за допомогою конструктора.<br>
4. Функція для друку чеку:<br>
   - Розробіть функцію, яка приймає на вхід список продуктів і виводить у консоль чек покупок. Чек повинен містити інформацію про кожен продукт (назва, ціна за одиницю, кількість, загальна вартість за цей продукт) та загальну суму покупки.<br>
Не забувайте експериментувати та тестувати програму з різними вхідними даними для перевірки правильності роботи коду.<hr>
`);


function Product(productName, productPrice, productAmount) {
   this.productName = productName;
   this.productPrice = productPrice;
   this.productAmount = productAmount;
}

Product.prototype.allProductsPrice = function () {
   return this.productPrice * this.productAmount;
}

function finalCheck() {
   let totalPrice = 0;
   for (let i = 0; i < arguments.length; i++) {

      console.log(`
      Product - ${arguments[i].productName}
      Price for 1 item - ${arguments[i].productPrice}
      Amount - ${arguments[i].productAmount}
      Total prices for this position - ${arguments[i].allProductsPrice()}
      `);
      totalPrice = totalPrice + arguments[i].allProductsPrice();

   }
   console.log(`Total price - ${totalPrice}`);
}

let iPhone = new Product("iPhone 11 pro", 24000, 1);


let macBook = new Product("MacBook 2021 pro max", 120000, 1);


let airPods = new Product("air Pods 3", 5000, 4);

finalCheck(iPhone, macBook, airPods);
