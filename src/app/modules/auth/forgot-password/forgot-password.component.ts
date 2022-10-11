import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../@core/services/auth.service";
import {Router} from "@angular/router";
import {ForgotService} from "./forgot-service";

@Component({
  selector: 'ngx-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email=new FormControl('');
  cpi:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private readonly router: Router,
    private forgotService: ForgotService,
  ) { }

  ngOnInit(): void {
    this.cpi = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    });
  }
  public sendOtp(){
    this.forgotService.sendOTP(this.cpi.value.email).subscribe(
      (res)=> {
        alert(res.message)
        this.router.navigate(['/auth/change-password']).then(r => console.log(r));
        window.sessionStorage.setItem('id',res.object.id);
      },
      (error) => {
        console.log(error)
        alert(error.error?.message);
      }
    );
  }

}
