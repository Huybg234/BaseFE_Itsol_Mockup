
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { SessionService } from '../../../@core/services/session.service';

import {ProfileService} from "../profile/profile.service";

import {PasswordService} from "./password.service";
import {User} from "../profile/profile.model";



export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.ComfirmPassword) ? null : {
    passwordnotmatch: true
  };
}


@Component({
  selector: 'ngx-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {


  [x: string]: any;
  formPassword: FormGroup;


  user: User = {};
  username: string;
  togger :boolean = false;
  submited = false;

  constructor(
    private sessionService: SessionService,
    private profileService: ProfileService,
    private passwordService:PasswordService,
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.initForm();
  }
  initForm(){
    this.username=this.sessionService.getItem('auth-user');



      this.profileService.getProfile(this.username).subscribe(
        (res)=>{

          this.user = res;

        })


    this.formPassword = this.fb.group({

        password:['', [Validators.required,Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,16}$"),]],
      ComfirmPassword:['',[Validators.required]],
      username:[this.username,[Validators.required]],

    },{
      validator: comparePassword
    });
  }




  onSubmit(){

    this.togger =true;
    this.submited = true;
    this.username=this.sessionService.getItem('auth-user')
    let ckeck = true;
    Object.keys(this.formPassword.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.formPassword.get(key).errors;
      if (controlErrors != null) {
        ckeck = false;
        return;
      }
    });
    if (ckeck && !this.formPassword.errors){


      this.user.password = this.formPassword.value.password;
      this.profileService.putChangePass(this.user).subscribe(
        (res)=>{
          alert("Cap nhat thanh cong")
        });
    }
  }

  blur(){
    this.togger = true;
  }
  forcus(){
    this.togger = false;
    this.submited = false;
  }



}
