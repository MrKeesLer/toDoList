import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  registerForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  onSubmit(){
    this.auth.register(this.getUsername()?.value,this.getPassword()?.value);
  }

  getUsername(){
    return this.registerForm.get('username');
  }

  getPassword(){
    return this.registerForm.get('password');
  }

}
