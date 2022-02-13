import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KontaktComponent } from './kontakt/kontakt.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { HomiesComponent } from './profile/homies/homies.component';


//definera routes här
const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent },
  { path: 'info', component: InfoComponent },
  { path: 'profile', component: ProfileComponent, children: [
      {
        path: 'homies', // child route path
        component: HomiesComponent, // child route component that the router renders
      } ]},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
