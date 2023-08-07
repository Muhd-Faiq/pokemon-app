import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilityComponent } from './ability/ability.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ability', component: AbilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
