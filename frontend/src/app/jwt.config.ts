import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export const jwtConfig = JwtModule.forRoot({
  config: {
    tokenGetter: tokenGetter,
    allowedDomains: ['localhost:3000'],
    disallowedRoutes: ['localhost:3000/users/sign_in'],
  },
});