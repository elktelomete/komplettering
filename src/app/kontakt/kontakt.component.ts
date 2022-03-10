import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  sendMessage = {
    burnAfterSending: "",
  }

  constructor(public serv: ModalService) { }

  ngOnInit(): void {
  }

  alert() {
    console.log('Этот цыпленок общается за железным занавесом... С ним в ГУЛАГ!',this.sendMessage);
    alert(this.sendMessage.burnAfterSending);
    
  }

}
