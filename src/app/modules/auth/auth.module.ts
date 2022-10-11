import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: '',
    component: LoginComponent,
  },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent,
    },

  ],
}];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
  ],
})
export class AuthModule { }
