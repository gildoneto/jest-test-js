import Cart from "./Cart";

describe("Cart", () => {
  let cart;

  const adidasMen = {
    title: "Adidas shoes - men",
    price: 35388,
  };
  const adidasWoman = {
    title: "Adidas shoes - women",
    price: 41872,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it("should return 0 when getTotal() is executed in a newly created instance", () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it("should multiply quantity and price and receive the total amount", () => {
    const item = {
      product: adidasMen,
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  it("should ensure no more than on product exists at a time", () => {
    cart.add({
      product: adidasMen,
      quantity: 2,
    });

    cart.add({
      product: adidasMen,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(35388);
  });

  it("should update total when a product gets included and the removed", () => {
    cart.add({
      product: adidasMen,
      quantity: 2,
    });

    cart.add({
      product: adidasWoman,
      quantity: 1,
    });

    cart.remove(adidasMen);

    expect(cart.getTotal()).toEqual(41872);
  });
});
