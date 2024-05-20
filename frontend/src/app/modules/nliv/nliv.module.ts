import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../../components/nliv/home/home.component';
import { AboutComponent } from '../../components/nliv/about/about.component';
import { ContactComponent } from '../../components/nliv/contact/contact.component';
import { NotFoundComponent } from '../../components/nliv/not-found/not-found.component';
import { Error500Component } from '../../components/nliv/error500/error500.component';
import { SearchComponent } from '../../components/nliv/search/search.component';
import { SharedLayoutComponent } from '../../components/nliv/shared-layout/shared-layout.component';

import { NlivRoutingModule } from './nliv-routing.module';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    Error500Component,
    SearchComponent,
    SharedLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NlivRoutingModule,
    SharedModule
  ]
})
export class NlivModule { }
