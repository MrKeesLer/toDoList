import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { 
  }

  public login(email: string,password: string): Promise<firebase.default.auth.UserCredential>{
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  public register(email: string, password: string): Promise<firebase.default.auth.UserCredential>{
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  public logout(): Promise<void>{   
    return this.auth.signOut();
  }

  public get isAuth$(): Observable<boolean> {
    return this.auth.authState.pipe(
      map((authState) => authState!==null)
    );
  }

  public get currentUserId$(): Observable<string> {
    return this.auth.authState.pipe(
      map((authState) => authState?.uid ?? '' )
    );
  }
}
