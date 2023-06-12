import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
  {
    path: 'doation/member-form',
    component: MemberFormComponent
  },
  {
    path: '',
    redirectTo: 'doation/member-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'doation/member-form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }
