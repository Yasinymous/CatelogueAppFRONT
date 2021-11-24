import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// services
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  load = false;
  currentProduct:any = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router ) { }
    
  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get("slug")?.toString();
    this.getProduct(slug);
  }

  getProduct(slug:any) {
    this.load = true;
    this.productService.get(slug)
      .subscribe(
        res => {
          this.currentProduct = res;
          this.currentProduct = this.currentProduct.data;
          this.load = false;
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

}
