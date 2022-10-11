import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";

export interface User {
  id?:number;
  name?:string;
  fullName?:string;
  email?:string;
  userName?:string;
  phoneNumber?:string;
  homeTown?:string;
  avatarName?:string;
  gender?:string;
  birthDay?:string;
  cccd?:string|number;
  position?:string;
  password?:string;
}


@Component({
  selector: 'ngx-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {


  constructor() {

  }



  ngOnInit(): void {

  }

}
