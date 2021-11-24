import { Component, OnInit } from '@angular/core';
// services
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  load = false;
  categories: any;
  currentCategory: any = null;
  currentIndex = -1;
  title = '';

  constructor(
    private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.load = true;
    this.categoryService.getAll()
      .subscribe(
        res => {
          this.categories = res;
          this.categories = this.categories.data;
          this.load = false;
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

  setActiveCategory(categories:any, index:any) {
    this.currentCategory = categories;
    this.currentIndex = index;
  }

}
