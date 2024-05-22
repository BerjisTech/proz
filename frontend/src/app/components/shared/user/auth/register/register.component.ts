import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';
import { Credentials } from '../../../../../interfaces/user/credentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  @Output() showLogin = new EventEmitter<void>();

  credentials: Credentials = { email: '', password: '' };
  passwordConfirmation: string = '';
  authError: boolean = false;
  error: string = 'Error creating account. Please try again.';

  showlogin(): void {
    this.showLogin.emit();
  }

  register(event: Event): void {
    event.preventDefault();
    this.authService.register(this.credentials).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        this.error = error.error;
        this.authError = true;
        console.error('Registration failed', error);
      },
    });
  }
}
