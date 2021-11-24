import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.css']
})
export class CategoryProductListComponent implements OnInit {

  load = false;
  products: any;
  currentProduct: any = null;
  currentIndex = -1;
  title = '';
  slug:any;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get("slug")?.toString();
    this.getProducts(this.slug);
  }

  getProducts(slug:any) {
    this.load = true;
    this.categoryService.getCategoryProduct(slug)
      .subscribe(
        res => {
          this.products = res;
          this.products = this.products.data;
          this.load = false;
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

  setActiveProduct(products:any, index:any) {
    this.currentProduct = products;
    this.currentIndex = index;
  }

}
