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

  addToCart(item) {
    let index = this.cart.findIndex((i) => i.id === item.id);

    if (index === -1) {
      item.quantity = 1;
      this.cart.push(item);
    } else {
      this.cart[index].quantity++;
    }

    this.saveCartToLocal();
  }

  removeItem(item) {
    let index = this.cart.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      if (this.cart[index].quantity !== 0) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }

    this.saveCartToLocal();
  }

  getTotalPrice() {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  getCartQuantity() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  getItemQuantity(item) {
    let index = this.cart.findIndex((i) => i.id === item.id);

    if (index !== -1) {
      return this.cart[index].quantity;
    }

    return 0;
  }

  saveCartToLocal() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
