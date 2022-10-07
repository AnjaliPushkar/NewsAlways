import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';


const routes: Routes = [
  {path: '', component:TopheadlinesComponent},
  {path: 'tech', component:TechComponent},
  {path: 'sports', component:SportsComponent},
  {path: 'health', component:HealthComponent},
  {path: 'entertainment', component:EntertainmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
