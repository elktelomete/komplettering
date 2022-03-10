import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalService } from './services/modal.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { HomiesComponent } from './profile/homies/homies.component';
import { ModalComponent } from './modal/modal.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    InfoComponent,
    ProfileComponent,
    HomiesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
