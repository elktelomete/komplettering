import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { HomiesComponent } from './profile/homies/homies.component';
import { AngularQAComponent } from './angular-qa/angular-qa.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    InfoComponent,
    ProfileComponent,
    HomiesComponent,
    AngularQAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
