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

Product.total = new Array();

function finalCheck(allProducts) {
   let totalPrice = 0;
   for (let i = 0; i < allProducts.length; i++) {

      console.log(`
      Product - ${allProducts[i].productName}
      Price for 1 item - ${allProducts[i].productPrice}
      Amount - ${allProducts[i].productAmount}
      Total prices for this position - ${allProducts[i].allProductsPrice()}
      `);
      totalPrice = totalPrice + allProducts[i].allProductsPrice();

   }
   console.log(`Total price - ${totalPrice}`);
}

let android = new Product("Samsung S23", 24000, 1);

Product.total.push(android);

let asus = new Product("Asus F-16", 120000, 1);

Product.total.push(asus);

let marchal = new Product("Marchal 3", 5000, 4);

Product.total.push(marchal);

finalCheck(Product.total);
