import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login({email, password}: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('sadmlkasdlkdiodamcvmaplqwdlqwkdngiqngwnr');
      return of({name: 'Admin', email: 'admin@gmail.com'});
    }
    const err = new Error('Failed to Login');
    return throwError(() => err);
  }

  logout() {
    this.router.navigate(['login']);
  }
}
