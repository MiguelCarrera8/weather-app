import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';


const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticationState = new BehaviorSubject('');

  constructor(private storage: Storage, private plt: Platform) {
    
    this.checkToken();
  }

  public async checkToken() {
    await this.storage.create();

    this.storage.get(TOKEN_KEY).then(res => {
      console.log("TOKEN ",res);
      if (res) {
        this.authenticationState.next(res);
      }
    })
  }

  public login(token): Promise<void> {
    return this.storage.set(TOKEN_KEY, token).then(() => {
      this.authenticationState.next(token);
    });
  }

  public logout(): Promise<void> {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next('logout');
    });
  }

  public isAuthenticated(): string {
    return this.authenticationState.value;
  }
}
