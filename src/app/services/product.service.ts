import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Product {
  id?: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseURL = "https://course-api.com/react-store-products";

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseURL);
  }

  getProductDetails(id) {
    return this.http.get(
      "https://course-api.com/react-store-single-product?id=" + id
    );
  }
}
