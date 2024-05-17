/* ------------- MINIMUM ------------- */

// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

function ProductCard(productName, count, isBought, priceForOne, sum) {
  this.productName = productName;
  this.count = count;
  this.isBought = isBought;
  this.priceForOne = priceForOne;
  this.sum = sum;
}

const productCard1 = new ProductCard("shampoo", 1, false, 120, 120);
const productCard2 = new ProductCard("hand cream", 1, true, 90, 90);
const productCard3 = new ProductCard("shower gel", 1, false, 180, 180);

const shoppingList = [productCard1, productCard2, productCard3];

//   Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const purchase = (product) => {
  const itemToBuy = shoppingList.find((item) => item.productName === product);
  itemToBuy.isBought = true;
};

purchase(productCard3.productName);

//   Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

const showIsBoughtFirst = () =>
  shoppingList.sort((a, b) => b.isBought - a.isBought);

console.log("Showing bought items first:", showIsBoughtFirst());
