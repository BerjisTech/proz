import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';
import { Credentials } from '../../../../../interfaces/user/credentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  @Output() showLogin = new EventEmitter<void>();

  credentials: Credentials = { email: '', password: '' };
  passwordConfirmation: string = '';

  showlogin(): void {
    this.showLogin.emit();
  }

  register(event: Event): void {
    event.preventDefault();
    this.authService.register(this.credentials).subscribe(
      response => {
        console.log('Registration successful', response);
        localStorage.setItem('token', response.token);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
