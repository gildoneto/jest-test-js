import find from "lodash/find";
import remove from "lodash/remove";

// Declaração de classe
export default class Cart {
  items = [];

  add(item) {
    if (find(this.items, { product: item.product })) {
      remove(this.items, { product: item.product });
    }
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  remove(product) {
    remove(this.items, { product });
  }

  summary() {}

  checkout() {}
}

// Uso
const cart = new Cart();

const product = {
  title: "",
  price: "",
};

const item = {
  quantity: 2,
  product,
};
