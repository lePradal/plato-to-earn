import { TeamSorterComponent } from './shared/components/team-sorter/team-sorter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxieComponent } from './shared/components/axie/axie.component';
import { FarmComputingComponent } from './shared/components/farm-computing/farm-computing.component';

const routes: Routes = [
  { path: 'farm', component: FarmComputingComponent,  },
  { path: 'axie', component: AxieComponent, },
  { path: 'sorter', component: TeamSorterComponent, },
  { path: '', redirectTo: '/farm', pathMatch: 'full' },
  { path: '**', redirectTo: 'farm' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
