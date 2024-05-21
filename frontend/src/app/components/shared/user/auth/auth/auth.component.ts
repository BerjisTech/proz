import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  showLogin: boolean = true;

  toogleLoginRegister() {
    this.showLogin = !this.showLogin;
  }
}
