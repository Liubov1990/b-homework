/* -------------- NORMAL ------------- */

function ProductCard(productName, count, isBought, priceForOne) {
  this.productName = productName;
  this.count = count;
  this.isBought = isBought;
  this.priceForOne = priceForOne;
  this.sum = count * priceForOne;
}

const productCard1 = new ProductCard("shampoo", 1, false, 120);
const productCard2 = new ProductCard("hand cream", 1, true, 90);
const productCard3 = new ProductCard("shower gel", 1, false, 180);
const productCard4 = new ProductCard("hand cream", 5, false, 90);

const shoppingList = [productCard1, productCard2];

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

const deletedProductCardIndex = shoppingList.findIndex(
  (item) => item.productName === "hand cream"
);
const updatedShoppingList = shoppingList.filter(
  (_item, index) => index !== deletedProductCardIndex
);

console.log("Shopping list without deleted elements:", updatedShoppingList);
console.log(
  "New shopping list after deleting elements:",
  shoppingList[deletedProductCardIndex]
);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addProductCards(arr, ...products) {
  const copiedArr = [...arr];
  products.forEach((product) => {
    const itemIndex = copiedArr.findIndex(
      (item) => item.productName === product.productName
    );
    if (itemIndex !== -1) {
      const addedItem = copiedArr[itemIndex];
      const { productName, count, isBought, priceForOne } = {
        ...addedItem,
        count: product.count + addedItem.count,
      };
      copiedArr[itemIndex] = new ProductCard(
        productName,
        count,
        isBought,
        priceForOne
      );
    } else {
      copiedArr.push(product);
    }
  });

  return copiedArr;
}

console.log(
  "Shopping list with added element:",
  addProductCards(updatedShoppingList, productCard3, productCard4)
);
