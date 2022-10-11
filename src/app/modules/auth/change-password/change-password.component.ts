import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../@core/services/auth.service";
import {changePassService} from "./change-password";

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  cpf: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private changePasswordService: changePassService,) { }

  ngOnInit(): void {
    this.cpf = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=[^A-Z\\n]*[A-Z])(?=[^a-z\\n]*[a-z])(?=[^0-9\\n]*[0-9])(?=[^#?!@$%^&*\\n-]*[#?!@$%^&*-]).{8,}$')]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('^(?=[^A-Z\\n]*[A-Z])(?=[^a-z\\n]*[a-z])(?=[^0-9\\n]*[0-9])(?=[^#?!@$%^&*\\n-]*[#?!@$%^&*-]).{8,}$')]],
      otp: ['', [Validators.required, Validators.length==6, Validators.pattern('^[0-9]*$')]],
    });
  }

  public checkPass(){
    if((this.cpf.value.password).equal(this.cpf.value.newPassword)==false){
      alert("Nhập lại mật khẩu không khớp")
    }
  }

  public checkOtp(){
    this.changePasswordService.check(window.localStorage.getItem("id"),this.cpf.value.password).subscribe(
      (res) =>{
        let today = Date.now();
        if(today - res.object.issueAt>=1){
          console.log(today - res.object.issueAt);
          alert("Mã otp hết hạn")
        }

        if((res.object.code).equal(this.cpf.value.otp)==false){
          alert("Mã otp không đúng")
        }
      }
    );
  }

  public changePassword(){
    this.changePasswordService.putConfirm(window.localStorage.getItem("id"),this.cpf.value.password).subscribe(

      (res)=> {
        alert(res.message)
        this.router.navigate(['/auth']).then(r => console.log(r));
      },
      (error) => {
        console.log(error)
        alert(error.error?.message);
      }
    );
  }

  onSubmit() {
    this.checkPass();
    this.checkOtp();
    this.changePassword();
  }
}
