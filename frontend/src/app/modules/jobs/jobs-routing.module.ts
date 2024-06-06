import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobsComponent } from '../../components/jobs/jobs/jobs.component';
import { JobComponent } from '../../components/jobs/job/job.component';
import { JobFormComponent } from '../../components/jobs/job-form/job-form.component';
import { MainComponent } from '../../components/jobs/main/main.component';
import { QuoteComponent } from '../../components/jobs/quote/quote.component';
import { SearchComponent } from '../../components/jobs/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: JobsComponent},
      { path: ':id', component: JobComponent },
      { path: ':id/edit', component: JobFormComponent },
      { path: 'new', component: JobFormComponent },
      { path: ':id/quote', component: QuoteComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
