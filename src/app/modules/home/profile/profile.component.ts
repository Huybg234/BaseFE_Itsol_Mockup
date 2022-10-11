import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { SessionService } from '../../../@core/services/session.service';
import { User } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;
  formProfile: FormGroup;
  user: User;
  username: string;
  urlAvatar="http://localhost:9090/api/public/user/user-profile/avatar/";
  avatarName:string;
  file:File=null;

  constructor(
    private sessionService: SessionService,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getByUserName();
    this.initForm();
  }
  initForm(){
    this.formProfile = this.fb.group({
      name: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      email: ['', [Validators.required,Validators.email]],
      phoneNumber: ['', [Validators.required,Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]],
      birthDay: ['', Validators.required],
      homeTown: ['', Validators.required],
      gender: ['', Validators.required],
      cccd: ['',[ Validators.required,Validators.pattern('[0-9+]{12,12}')]],
      position: ['', Validators.required],
      // name: ['', Validators.required],

    });
  }

  // getByUserName(){
  //   this.username=this.sessionService.getItem('auth-user')
  //   this.profileService.getProfile(this.username).subscribe(
  //     (res)=>{
  //       this.updateForm(res)
  //     }
  //   )
  // }

  getByUserName(){
    this.username=this.sessionService.getItem('auth-user')
    this.profileService.getProfile(this.username).subscribe(
      (res)=>{
        this.updateForm(res)
        this.user = res;
        this.avatarName = res.avatarName;
      }
    )
  }

  updateForm(user: User): void {
    this.formProfile.patchValue({
      name:user.name,
      // fullName:user.fullName,
      email:user.email,
      phoneNumber:user.phoneNumber,
      birthDay:user.birthDay,
      homeTown:user.homeTown,
      gender: user.gender,
      cccd:user.cccd,
      position:user.position
    });
  }

  submit(){
    console.log(this.formProfile.controls);
    console.log(typeof this.formProfile.controls);
    let ckeck = true;
    Object.keys(this.formProfile.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.formProfile.get(key).errors;
      if (controlErrors != null) {
        ckeck = false;
        return;
      }
    });
    if (ckeck){
      this.updateUser();
      console.log((this.user))
      this.profileService.putProfile(this.user).subscribe(
        (res)=>{
          console.log(res);
        });
    }
  }

  updateUser(){
    let newUser = this.formProfile.value;
    this.user.name = newUser.name;
    this.user.email = newUser.email;
    this.user.phoneNumber = newUser.phoneNumber;
    this.user.birthDay = newUser.birthDay;
    this.user.homeTown = newUser.homeTown;
    this.user.gender = newUser.gender;
    this.user.cccd = newUser.cccd;
    this.user.position=newUser.position;
  }

  onChange(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  onUpload() {
    if (this.file) {
      this.profileService.putAvatar(this.file, this.user.id).subscribe(
        (res) => {
          this.avataName = res.object;
          this.file = null;
        }
      )
    }
  }

}
