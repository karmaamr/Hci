import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() { }

  // Method to simulate user login
  login() {
    this.isLoggedIn = true;
  }

  // Method to simulate user logout
  logout() {
    this.isLoggedIn = false;
  }

  // Method to check if user is logged in
  isLoggedInUser() {
    return this.isLoggedIn;
  }
}
