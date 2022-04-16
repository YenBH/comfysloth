import { Component, OnInit } from "@angular/core";
import data from "./data";
import { ProductService } from "src/app/services/product.service";

enum Mode {
  Card,
  List,
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  cardMode = Mode.Card;
  listMode = Mode.List;
  mode = this.cardMode;
  products: any[] = [];

  filteredProducts: any[] = [];
  categories: any[] = [
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
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getProducts().subscribe((res: any) => {
    this.products = data;
    this.filteredProducts = [...this.products];
    // });
  }

  onSelectCategory(cat: string) {
    if (cat !== "all") {
      this.filteredProducts = this.products.filter((p) => p.category === cat);
    } else {
      this.filteredProducts = [...this.products];
    }
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
    this.mode = value;
  }
}
