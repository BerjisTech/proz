import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  register(user: any): void {
    this.authService.register(user).subscribe((response) => {
      console.log(response);
    });
  }
}
