import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {User} from '../../models/model/User';
import {HttpErrorResponse} from '@angular/common/http';
// import {UserService} from '../../service/user.service';

@Component({
  selector: 'ngx-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.scss'],
})
export class HomePublicComponent implements OnInit {
  user: any;

  constructor() {
  }

  ngOnInit(): void {
    // this.getUser();
  }


}
