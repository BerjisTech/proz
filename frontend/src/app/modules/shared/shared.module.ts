import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/shared/navigation/navigation.component';
import { NavItemComponent } from '../../components/shared/navigation/nav-item/nav-item.component';
import { GlobalSearchFormComponent } from '../../components/shared/search/global-search-form/global-search-form.component';
import { GlobalSearchResultsComponent } from '../../components/shared/search/global-search-results/global-search-results.component';



@NgModule({
  declarations: [
    NavigationComponent,
    NavItemComponent,
    GlobalSearchFormComponent,
    GlobalSearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    NavItemComponent,
    GlobalSearchFormComponent,
    GlobalSearchResultsComponent
  ]
})
export class SharedModule { }
