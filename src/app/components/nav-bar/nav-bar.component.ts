import { Component, OnInit } from "@angular/core";

import { CartService } from "./../../services/cart.service";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

  getUserName() {
    return this.authService.user
      ? this.authService.user.username
          .split(" ")
          .map((item) => item.charAt(0))
          .join("")
      : "";
  }
}
