import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../shared/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import {PasswordComponent} from "./password/password.component";
import {StaffListComponent} from "./staff/staff-list/staff-list.component";
import {StaffComponent} from "./staff/staff.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'dashboard',
      // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'password',
      component: PasswordComponent,
    },
    {
      path: 'staff',
      component: StaffComponent,
    },

  ],
}];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    PasswordComponent,
    StaffListComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbMenuModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule
  ],
})
export class HomeModule { }
