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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
