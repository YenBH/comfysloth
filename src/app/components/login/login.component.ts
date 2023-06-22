import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isInvalid = false;
  user = {
    email: "janet.weaver@reqres.in",
    password: "janet",
  };

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user).then((isLogin) => {
      if (isLogin) {
        this.router.navigate(["/"]);
      } else {
        this.isInvalid = true;
      }
    });
  }
}
