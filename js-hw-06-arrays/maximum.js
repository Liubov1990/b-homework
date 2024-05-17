/* -------------- MAXIMUM ------------- */

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

// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

const initialValue = 0;
const allProductsSum = shoppingList.reduce(
  (accumulator, currentValue) => accumulator + currentValue.sum,
  initialValue
);
console.log("Sum of all products in the list:", allProductsSum);

// 2. Підрахунок суми всіх (не) придбаних продуктів.

const notBoughtproductsSum = () => {
  const isNotBought = shoppingList.filter((item) => item.isBought === false);
  const initialValue = 0;

  return isNotBought.reduce(
    (accumulator, currentValue) => accumulator + currentValue.sum,
    initialValue
  );
};

console.log("Sum of not bought items:", notBoughtproductsSum());

// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

const sortedProductsSum = () => shoppingList.sort((a, b) => a.sum - b.sum); // ascending
// const sortedProductsSum = () => shoppingList.sort((b, a) => b.sum - a.sum); // descending

console.log("Sorted by products sum:", sortedProductsSum());
