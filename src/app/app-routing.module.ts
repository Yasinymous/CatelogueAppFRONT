
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//product
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
//category
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryProductListComponent } from './components/category/category-product-list/category-product-list.component';
// auth
import { AuthComponent } from './components/auth/auth.component';
// favorites
import { FavoriteListComponent } from './components/favorite/favorite-list/favorite-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'auth', component:AuthComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:slug/products', component: CategoryProductListComponent },
  { path: 'favorites', component: FavoriteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }