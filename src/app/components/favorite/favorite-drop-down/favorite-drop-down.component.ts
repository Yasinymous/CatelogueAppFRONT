import { Component, OnInit } from '@angular/core';
// services
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-favorite-drop-down',
  templateUrl: './favorite-drop-down.component.html',
  styleUrls: ['./favorite-drop-down.component.css']
})
export class FavoriteDropDownComponent implements OnInit {

  load = false;
  favorites: any;

  constructor(
    private userService: UserService ) { }

  ngOnInit(): void {
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


}
