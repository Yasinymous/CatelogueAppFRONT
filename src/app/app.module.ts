import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryProductListComponent } from './components/category/category-product-list/category-product-list.component';
import { FavoriteDropDownComponent } from './components/favorite/favorite-drop-down/favorite-drop-down.component';
import { FavoriteListComponent } from './components/favorite/favorite-list/favorite-list.component';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CategoryListComponent,
    CategoryProductListComponent,
    FavoriteDropDownComponent,
    FavoriteListComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
