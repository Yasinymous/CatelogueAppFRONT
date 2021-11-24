import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  load = false;
  isAuth = false;
  userData: any;
  //user$: Observable<User>;

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getUser().isAuth){
      this.router.navigate(['products']);
    }
  }

  Submit(result:any){
    this.signIn(result.email,result.password);
  }

  signIn(email:string,password:string ) {
    this.load = true;
    this.userService.signIn(email,password)
      .subscribe(
        res => {
          this.userData = res;
          this.userData = this.userData.data;
          this.load = false;

          this.tokenStorageService.saveToken( this.userData.token);

          this.tokenStorageService.saveUser({isAuth:true, userData:this.userData});
          this.router.navigate(['products']);
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

  signUp(fullName: string, email: string,password: string) {
    this.load = true;
    this.userService.signUp(fullName,email,password)
      .subscribe(
        res => {
          this.userData = res;
          this.userData = this.userData.data;
          this.load = false;
        },
        error => {
          console.log(error);
          this.load = false;
        });
  }

  signOut() {
    this.load = true;
    this.userService.signOut()
      .subscribe(
        res => {
          //this.products = res;
          //this.products = this.products.data;
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
