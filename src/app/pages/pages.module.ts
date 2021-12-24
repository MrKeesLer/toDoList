import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TasksComponent } from './tasks/tasks.component';
import { TaskBracketComponent } from './tasks/task-bracket/task-bracket.component'



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    TasksComponent,
    TaskBracketComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    RoutingModule,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ]
})
export class PagesModule { }
