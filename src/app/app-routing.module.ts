import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KontaktComponent } from './kontakt/kontakt.component';
import { InfoComponent } from './info/info.component';

//definera routes här
const routes: Routes = [
  { path: 'kontakt', component: KontaktComponent },
  { path: 'info', component: InfoComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
