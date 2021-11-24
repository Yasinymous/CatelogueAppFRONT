import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ProductService } from 'src/app/services/product/product.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  load = false;
  products: any;
  currentProduct: any = null;
  currentIndex = -1;
  title = '';

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router:Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.load = true;
    this.productService.getAll()
      .subscribe(
        res => {
          this.products = res;
          this.products = this.products.data;
          this.load = false;
          console.log(this.products)
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

  addFavItem(productId:any) {
    if (this.tokenStorageService.getUser().isAuth){
      this.userService.addFav(productId)
      .subscribe(
        res => {
          console.log(res);
          this.load = false;
        },
        error => {
          console.log(error);
          this.load = false;
        });
    }
    else {
      this.router.navigate(['auth']);
    }
    
  }

  setActiveProduct(products:any, index:any) {
    this.currentProduct = products;
    this.currentIndex = index;
  }

  pageChanged(){

  }


}
