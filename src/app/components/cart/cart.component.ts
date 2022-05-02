import { Component, OnInit } from "@angular/core";

import { AuthService } from "./../../services/auth.service";
import { CartService } from "./../../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cart = [];
  constructor(
    public cartService: CartService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
}
