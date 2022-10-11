import {Component, OnInit} from "@angular/core";
import {User} from "./staff.model";
import {SessionService} from "../../../@core/services/session.service";
import {ProfileService} from "../profile/profile.service";
import {FormBuilder} from "@angular/forms";
import {PrimeNGConfig} from "primeng/api";
import {StaffService} from "./staff.service";




@Component({
  selector: 'ngx-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  datas:User[]=[];
  user: User;
  username: string;
  constructor(private sessionService: SessionService,
              private profileService: ProfileService,
              private staffService: StaffService,
              private fb: FormBuilder,
              private primengConfig: PrimeNGConfig) {

  }



  ngOnInit(): void {

    this.getAll();
  }

  getAll(){
    this.staffService.getAll().subscribe((res:any)=>{
      this.datas = res
    })
  }

}
