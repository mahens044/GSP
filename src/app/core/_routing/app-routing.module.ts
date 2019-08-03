import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GspLoginComponent } from 'src/app/gsp-login/gsp-login.component';
import { GspHomeComponent } from 'src/app/gsp-home/gsp-home.component';
import {GspPipelineComponent} from '../../gsp-pipeline/gsp-pipeline.component';
import {GspOpportunityDetailComponent} from '../../gsp-opportunity-detail/gsp-opportunity-detail.component';

const routes: Routes =
  [
{
  path : '',
  component: GspHomeComponent
},
  {
    path: 'Pipeline',
    component: GspPipelineComponent
  },
{
  path: 'Login',
  component: GspLoginComponent
},
    {
      path : 'opportunityDetail/:id',
      component : GspOpportunityDetailComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
