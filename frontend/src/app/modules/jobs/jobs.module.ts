import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsComponent } from '../../components/jobs/jobs/jobs.component';
import { JobComponent } from '../../components/jobs/job/job.component';
import { JobFormComponent } from '../../components/jobs/job-form/job-form.component';
import { MainComponent } from '../../components/jobs/main/main.component';
import { QuoteComponent } from '../../components/jobs/quote/quote.component';
import { SearchComponent } from '../../components/jobs/search/search.component';

import { SharedModule } from '../shared/shared.module';

import { JobsRoutingModule } from './jobs-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    JobsComponent,
    JobComponent,
    JobFormComponent,
    MainComponent,
    QuoteComponent,
    SearchComponent,
  ],
  imports: [RouterModule, CommonModule, JobsRoutingModule, SharedModule],
})
export class JobsModule {}
