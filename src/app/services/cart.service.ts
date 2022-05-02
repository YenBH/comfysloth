import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = [];
  constructor() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.push(product);

    this.saveCartToLocal();
  }

  removeItem(item) {
    let index = this.cart.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }

    this.saveCartToLocal();
  }

  getTotalPrice() {
    return this.cart.reduce((acc, item) => acc + item.price, 0);
  }

  saveCartToLocal() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
