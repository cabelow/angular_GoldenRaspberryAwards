import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = `${environment.baseUrl}auth/api/token/`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }
}
