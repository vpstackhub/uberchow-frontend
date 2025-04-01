import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
    const user = localStorage.getItem('user');
    this.loggedIn = !!user;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(user: any): void {
    this.loggedIn = true;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

