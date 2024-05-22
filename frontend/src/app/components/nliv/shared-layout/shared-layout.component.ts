import { Component } from '@angular/core';
import { AuthService } from '../../../services/user/auth.service';

@Component({
  selector: 'app-shared-layout',
  templateUrl: './shared-layout.component.html',
  styleUrl: './shared-layout.component.scss'
})
export class SharedLayoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout().subscribe((response: any) => { // Specify the type for 'response'
      console.log(response);
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
