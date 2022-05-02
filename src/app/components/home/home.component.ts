import { Component, OnInit } from "@angular/core";
import data from "./data-1";
import { ProductService } from "src/app/services/product.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = data;
  }
}
