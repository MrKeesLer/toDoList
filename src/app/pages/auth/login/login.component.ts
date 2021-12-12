import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  onSubmit(){
    this.auth.login(this.getUsername()?.value,this.getPassword()?.value);
  }

  getUsername(){
    return this.loginForm.get('username');
  }

  getPassword(){
    return this.loginForm.get('password');
  }
}
