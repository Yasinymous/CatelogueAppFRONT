import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartOpen = false;
  isOpen = false;

  isAuth = false;
  fullName = '';

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private userService: UserService) { }
    
  ngOnInit(): void {
    if (this.tokenStorageService.getUser().isAuth){
      this.isAuth = this.tokenStorageService.getUser().isAuth;
      this.fullName = this.tokenStorageService.getUser().userData.fullName;
    }
  }

  signOut(){
    this.userService.signOut();
    this.tokenStorageService.deleteSession();
  }

}
