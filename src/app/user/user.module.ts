import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { httpInterceptors } from '../shared/interceptors';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { Register2Component } from './components/auth/register2/register2.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, Register2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule,
  ],
  providers: [AuthService, httpInterceptors],
})
export class UserModule {}
