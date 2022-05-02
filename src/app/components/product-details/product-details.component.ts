import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { CartService } from "./../../services/cart.service";
import { Product, ProductService } from "./../../services/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productService.getProductDetails(id).subscribe((data: any) => {
      data.showImage = data.images[0].url;
      this.product = data;
    });
  }

  onAddToCartClick() {
    this.cartService.addToCart(this.product);
  }
}
