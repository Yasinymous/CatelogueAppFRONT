import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/networking/urlManager';

// urlmanager hata veriyor urlManager hatasiz

/*
  In my case, the error was in the import statement.
  The import statement had a capital letter instead of small letter,
  which worked during develop in Windows, but not when compiling for production.
*/

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(product.getAll);
  }

  get(slug: string) {
    return this.http.get(`${product.get}/${slug}`);
  }

  create(data: string) {
    return this.http.post(product.add, data);
  }

  update(data: string) {
    return this.http.put(product.set, data);
  }


  delete(id: number) {
   // return this.http.post(product.delete, data);
  }
}