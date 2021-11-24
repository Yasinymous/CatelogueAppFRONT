import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { user } from 'src/app/networking/urlManager';
import { TokenStorageService } from '../token/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService) { }

   ngOnInit(): void {
    
  }
  
  signIn(email: string,password: string) {
    return this.http.post(user.signIn, {email,password});
  }

  signUp(fullName: string, email: string,password: string) {
    return this.http.post(user.signUp, {fullName,email,password});
  }

  signOut() {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('authorization', 'Bearer ' + this.tokenStorageService.getUser().userData.token);
    return this.http.post(user.signOut,'',{'headers':headers});
  }

  // favorite end point 
  getAllFav() {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('authorization', 'Bearer ' + this.tokenStorageService.getUser().userData.token);
    return this.http.get(user.getAllFav,{'headers':headers});
  }

  addFav(productId: string ) {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('authorization', 'Bearer ' + this.tokenStorageService.getUser().userData.token);
    console.log(headers)
    return this.http.post(user.addFav,{product: productId},{'headers':headers});
  }

  deleteFav(id: string) {
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('authorization', 'Bearer ' + this.tokenStorageService.getUser().userData.token);
    return this.http.post(user.deleteFav, id);
  }

}
