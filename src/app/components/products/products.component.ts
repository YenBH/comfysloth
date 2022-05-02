import { Component, OnInit } from "@angular/core";

import { CartService } from "./../../services/cart.service";
import data from "./data";
import { ProductService } from "src/app/services/product.service";

enum Modes {
  Card,
  List,
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  modes = Modes;
  maxPrice = 100;
  price = "0";
  currentMode = localStorage.getItem("currentMode")
    ? localStorage.getItem("currentMode")
    : Modes.Card;

  products: any[] = [];

  filteredProducts = [];

  categories = [
    {
      text: "All",
      value: "all",
    },
    {
      text: "Office",
      value: "office",
    },
    {
      text: "Living Room",
      value: "living room",
    },
    {
      text: "Kitchen",
      value: "kitchen",
    },
    {
      text: "Bedroom",
      value: "bedroom",
    },
    {
      text: "Dining",
      value: "dining",
    },
    {
      text: "Kids",
      value: "kids",
    },
  ];

  companies = [
    {
      text: "All",
      value: "all",
    },
    {
      text: "Marcos",
      value: "marcos",
    },
    {
      text: "Liddy",
      value: "liddy",
    },
    {
      text: "Ikea",
      value: "ikea",
    },
    {
      text: "Caressa",
      value: "caressa",
    },
  ];

  colors = [
    {
      color: "#ff0000",
      value: "#ff0000",
    },
    {
      color: "#00ff00",
      value: "#00ff00",
    },
    {
      color: "#0000ff",
      value: "#0000ff",
    },
    {
      color: "#000",
      value: "#000",
    },
    {
      color: "#ffb900",
      value: "#ffb900",
    },
  ];

  constructor(
    private productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = [...this.products];

      let max = this.products[0].price;

      for (let i = 1; i < this.products.length; i++) {
        if (this.products[i].price > max) max = this.products[i].price;
      }
      this.maxPrice = max;
      this.price = max;
    });
  }

  onSelectCategory(cat: string) {
    if (cat !== "all") {
      this.filteredProducts = this.products.filter((p) => p.category === cat);
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onSelectCompany(value) {
    if (value !== "all") {
      this.filteredProducts = this.products.filter((p) => p.company === value);
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onSelectColor(col: string) {
    if (col !== "all") {
      this.filteredProducts = this.products.filter((p) =>
        p.colors.includes(col)
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onPriceChange(pri: string) {
    this.price = pri;
    this.filteredProducts = this.products.filter((p) => p.price < pri);
  }

  onFreeShipChange(freeShip) {
    if (freeShip) {
      this.filteredProducts = this.products.filter((p) => p.shipping);
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onSort(by) {
    console.log(by);
  }

  onSearch(value) {
    value = value.trim();
    if (value !== "") {
      this.filteredProducts = this.products.filter((p) =>
        p.name.includes(value)
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  onModeSelect(value) {
    this.currentMode = value;
    localStorage.setItem("currentMode", value);
  }
}
