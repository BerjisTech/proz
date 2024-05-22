import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Credentials } from '../../../../../interfaces/user/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @Input() showHero: boolean = true;

  @Output() showRegister = new EventEmitter<void>();

  credentials: Credentials = { email: '', password: '' };

  showregister(): void {
    this.showRegister.emit();
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.cookieService.set('token', response['token']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
