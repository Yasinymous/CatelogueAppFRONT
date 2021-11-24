import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { UserService } from 'src/app/services/user/user.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})

export class FavoriteListComponent implements OnInit {

  load = false;
  favorites: any;
  currentProduct: any = null;
  currentIndex = -1;
  title = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    if (!this.tokenStorageService.getUser().isAuth){
      this.router.navigate(['products']);
    }
    this.getFavorites();
  }

  getFavorites() {
    this.load = true;
    this.userService.getAllFav()
      .subscribe(
        res => {
          this.favorites = res;
          this.favorites = this.favorites.data;
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

  addFavItem(productId:any) {
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

  pageChanged(){

  }


}
