import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../../../services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  @Input() showHero: boolean = true;

  @Output() showRegister =  new EventEmitter<void>();

  showregister(): void {
    this.showRegister.emit();
  }

  login(credentials: any): void {
    this.authService.login(credentials).subscribe((response) => {
      console.log(response);
    });
  }
}
