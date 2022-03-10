import { Injectable } from '@angular/core';
import { HomiesComponent } from '../profile/homies/homies.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {


  constructor() {}

   public brosephs() {
    console.log("då")
    return HomiesComponent
   }

}

