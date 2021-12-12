import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(public auth: AngularFireAuth) { 
    this.auth.authState.subscribe(authState => {this.authState = authState});
  }

  login(email: string,password: string){
    this.auth.signInWithEmailAndPassword(email,password)
    .then(res => {
      console.log('Successfully logged in', res);
    })
    .catch(error => {
      console.log('Somethimg went wrong', error.message);
    });
  }

  register(email: string, password: string){
    this.auth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      console.log('Successfully signed up!', res);
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });   ;
  }

  logout(){
    return this.auth.signOut();
  }

  public get isAuth(): boolean {
    return this.authState != null;
  }

  public get currentUserId(): string {
    return this.isAuth ? this.authState.uId : null;
  }
}
