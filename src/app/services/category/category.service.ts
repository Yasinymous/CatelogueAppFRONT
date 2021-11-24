import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from 'src/app/networking/urlManager';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient) { }

  getAll() {
    return this.http.get(category.getAll);
  }

  get(id: string) {
    return this.http.get(`${category.get}/${id}`);
  }

  getCategoryProduct(slug: string) {
    return this.http.get(`${category.getCategoryProduct}/${slug}`);
  }

  create(data: string) {
    return this.http.post(category.add, data);
  }

  update(data: string) {
    return this.http.put(category.set, data);
  }


  delete(id: number) {
   // return this.http.post(product.delete, data);
  }
}
