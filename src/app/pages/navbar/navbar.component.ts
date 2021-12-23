import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public isAuth: boolean = false;
  private authSub: Subscription;

  constructor(public auth: AuthService) {
    this.authSub = this.auth.isAuth$.subscribe((isAuth) =>{
      this.isAuth = isAuth;
    });
    
  }
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
  

  ngOnInit(): void {
  }

  public logout(){
    this.auth.logout();
  }
  
}