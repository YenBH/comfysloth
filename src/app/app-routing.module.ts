import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CartComponent } from "./components/cart/cart.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductsComponent } from "./components/products/products.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthInterceptor } from "./services/auth.interceptor";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "products/:id",
    component: ProductDetailsComponent,
  },

  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "sign-up",
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
