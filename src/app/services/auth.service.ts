import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {from, Observable, of, throwError} from 'rxjs';

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


  login(params: { email: string, password: string }): Observable<string | boolean> {
    if (params.email === 'admin@gmail.com' && params.password === 'admin123') {
      this.setToken('asdmnasjkdajskndnjuxdquiwdhiuqwhdiuqwhd');
      return of(true)
    }
    return throwError(() => new Error('Failed to Login'));
  }

  logout() {
    this.router.navigate(['login']);
  }
}
