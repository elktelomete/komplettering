import { Component, OnInit } from '@angular/core';
import { __spreadArray } from 'tslib';
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

  
  alert() {
    console.log('Этот цыпленок общается за железным занавесом... С ним в ГУЛАГ!',this.sendMessage);
    alert(this.sendMessage.burnAfterSending);
    
  }

  public data2 = []

  constructor(private dataSet: ModalService){

  }
  
  ngOnInit(): void {
    this.data2 = this.dataSet.getServiceData();
  }
}
