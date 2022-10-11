import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {User} from "../profile/profile.model";


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private readonly profileAPI = `${environment.apiUrl}public/user/user-profile/`;

  constructor(private http: HttpClient) { }

  getProfile(username: any):Observable<any>{
    return this.http.get<any>(this.profileAPI + username)
  }

  putAvatar(file,id:number):Observable<any> {
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.profileAPI + "new-avatar/" +id, formData)
  }


  putProfile(user: User):Observable<any>{
    return this.http.put<any>(this.profileAPI,user);
  }

  putChangePass(user: User):Observable<any>{
    return this.http.put<any>(this.profileAPI +'new-pass',user);
  }
}
