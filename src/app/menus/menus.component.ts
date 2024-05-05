import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {
  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedInUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
