import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../profile/profile.model";

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private readonly profileAPI = `${environment.apiUrl}public/user/user-profile/`;



  constructor(private http: HttpClient) { }

  getProfile(username: any):Observable<any>{
    return this.http.get<any>(this.profileAPI + username)
  }

  putProfile(user: User):Observable<any>{
    return this.http.put<any>(this.profileAPI,user);
  }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.profileAPI+"getall").pipe(
    )
  }

}
