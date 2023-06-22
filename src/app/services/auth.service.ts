import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://reqres.in/api/login";
  user = null;
  constructor(private http: HttpClient) {}

  login(user) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, user).subscribe((res: any) => {
        this.user = res = {
          email: "janet.weaver@reqres.in",
          username: "janet",
          avatar: "https://reqres.in/img/faces/2-image.jpg",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyNDAzQGZha2VtYWlsLmNvbSIsInVzZXJuYW1lIjoidGVzdDI0MDNAZmFrZW1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkVVF5bk1ZVS50THl1VEJ6WDNrMXhuT2hDYUE0Lk5IVXdDc0JUVmliV1hicTk2Z1RSVUs3cWkiLCJiaW8iOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hcGkucmVhbHdvcmxkLmlvL2ltYWdlcy9zbWlsZXktY3lydXMuanBlZyIsImlhdCI6MTY0NzI2NzY5MywiZXhwIjoxNjUyNDUxNjkzfQ.5N9FteVyXPv3roEhzzk9JSNTp5FhUxPZOUl2EBXQc5A",
        };
        localStorage.setItem("user", JSON.stringify(res));
        resolve(true);
      });
    });
  }

  signup(user) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, user).subscribe((res) => {
        this.user = res = {
          email: "janet.weaver@reqres.in",
          username: "janet",
          avatar: "https://reqres.in/img/faces/2-image.jpg",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyNDAzQGZha2VtYWlsLmNvbSIsInVzZXJuYW1lIjoidGVzdDI0MDNAZmFrZW1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkVVF5bk1ZVS50THl1VEJ6WDNrMXhuT2hDYUE0Lk5IVXdDc0JUVmliV1hicTk2Z1RSVUs3cWkiLCJiaW8iOm51bGwsImltYWdlIjoiaHR0cHM6Ly9hcGkucmVhbHdvcmxkLmlvL2ltYWdlcy9zbWlsZXktY3lydXMuanBlZyIsImlhdCI6MTY0NzI2NzY5MywiZXhwIjoxNjUyNDUxNjkzfQ.5N9FteVyXPv3roEhzzk9JSNTp5FhUxPZOUl2EBXQc5A",
        };
        localStorage.setItem("user", JSON.stringify(res));
        resolve(true);
      });
    });
  }

  isLoggedIn() {
    if (this.user) return this.user;

    let saved = localStorage.getItem("user");

    if (saved) {
      this.user = JSON.parse(saved);
    }

    return this.user || saved;
  }

  isHavePermission(key) {
    if (!this.user) return false;
    let index = this.user.permission.indexOf(key);

    return index > -1;
  }

  logout() {
    localStorage.removeItem("user");
    this.user = null;
  }
}
