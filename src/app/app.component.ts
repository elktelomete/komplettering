import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SPA';

  constructor(public modServ: ModalService) {}

  
  
  bros($event: Event) {
    console.log("hej")
    
    // $event.preventDefault()

    // this.modServ.brosephs()
  }
  
}
