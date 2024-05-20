import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/nliv/home/home.component';
import { SearchComponent } from '../../components/nliv/search/search.component';
import { ContactComponent } from '../../components/nliv/contact/contact.component';
import { AboutComponent } from '../../components/nliv/about/about.component';
import { NotFoundComponent } from '../../components/nliv/not-found/not-found.component';
import { Error500Component } from '../../components/nliv/error500/error500.component';
import { SharedLayoutComponent } from '../../components/nliv/shared-layout/shared-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: SharedLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 's/:searchTerm', component: SearchComponent},
      { path: '404', component: NotFoundComponent },
      { path: '500', component: Error500Component },
      { path: '**', redirectTo: '404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NlivRoutingModule { }
