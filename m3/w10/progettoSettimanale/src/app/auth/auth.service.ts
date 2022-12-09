import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, LoginRequest, RegisterRequest } from './auth-response.interface';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:4201/register';
  urlLogin = 'http://localhost:4201/login';

  private authSubj = new BehaviorSubject<null | AuthResponse>(null);

  user$ = this.authSubj.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.restore()
  }

  signUp(data: RegisterRequest) {
    return this.http.post<AuthResponse>(this.url, data).pipe(catchError(err => {
      console.log(err);
      throw err
    }))
  }

  login(data: LoginRequest) {
    return this.http.post<AuthResponse>(this.urlLogin, data).pipe(catchError(err => {
      throw err
    }), tap((res) => {
      this.authSubj.next(res);
      localStorage.setItem('user', JSON.stringify(res))
    }))
  }

  logout() {
    this.authSubj.next(null);
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  restore() {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const userdata: AuthResponse = JSON.parse(user);

    this.authSubj.next(userdata)
  }

}
