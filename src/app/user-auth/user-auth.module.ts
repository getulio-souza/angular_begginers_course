import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAuthModule} from "../user-auth/user-auth.module";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserAuthModule
  ],

})
  
export class UserAuthModule { }
