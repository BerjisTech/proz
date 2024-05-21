import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(credentials: any): void {
    this.authService.login(credentials).subscribe((response) => {
      console.log(response);
    });
  }
}
