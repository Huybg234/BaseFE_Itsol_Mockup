import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePublicComponent } from './home-public.component';
import {RouterModule, Routes} from '@angular/router';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

import {DialogModule} from 'primeng/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { UserEditComponent } from './user-edit/user-edit.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from 'primeng/paginator';

const routes: Routes = [{
  path: '',
  component: HomePublicComponent,
  children: [

    { path: 'user/user-edit',
      component: UserEditComponent,
    },
  ],
},

];

@NgModule({
  declarations: [
    HomePublicComponent,

    UserEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AvatarModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
    ReactiveFormsModule,
    CalendarModule,
    CardModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    CalendarModule,
    FileUploadModule,
    InputTextareaModule,
    AutoCompleteModule,
    FormsModule,
    SliderModule,
    DropdownModule,
    PaginatorModule,
  ],
})
export class HomePublicModule { }
