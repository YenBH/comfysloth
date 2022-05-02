import { AuthService } from "./../../services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  user = {
    email: "",
    password: "",
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  signup() {
    this.authService.signup(this.user).then((success) => {
      if (success) {
        this.router.navigateByUrl("/");
      } else {
        // this.invalidEmail = true;
      }
    });
  }
}
