import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () =>  import('./modules/nliv/nliv.module').then(m => m.NlivModule) }
];
