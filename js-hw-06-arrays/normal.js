/* -------------- NORMAL ------------- */

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
const productCard4 = new ProductCard("hand cream", 5, false, 90, 450);

const shoppingList = [productCard1, productCard2];

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

const deleteProductCard = shoppingList.filter(
  (item) => item.productName !== "hand cream"
);

console.log("Shopping list without deleted elements:", shoppingList);
console.log("Shopping list after deleting elements:", deleteProductCard);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addProductCards(arr, ...products) {
  products.forEach((product) => {
    const itemIndex = arr.findIndex(
      (item) => item.productName === product.productName
    );
    if (itemIndex !== -1) {
      const addedItem = arr[itemIndex];
      const { productName, count, isBought, priceForOne, sum } = {
        ...addedItem,
        count: product.count + addedItem.count,
        sum: addedItem.sum + addedItem.priceForOne,
      };
      arr[itemIndex] = new ProductCard(
        productName,
        count,
        isBought,
        priceForOne,
        sum
      );
    } else {
      arr.push(product);
    }
  });

  return arr;
}

console.log(
  "Shopping list with added element:",
  addProductCards(shoppingList, productCard3, productCard4)
);
