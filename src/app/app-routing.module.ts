import { AusKycComponent } from './aus-kyc/aus-kyc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentAccountComponent } from './current-account/current-account.component';
import { LeadGenerationComponent } from './lead-generation/lead-generation.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentAccountComponent,
  },

  {
    path: 'Lead-Generation',
    component: LeadGenerationComponent,
  },
  {
    path: 'AUS-KYC',
    component: AusKycComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
