import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  sendMessage = {
    burnAfterSending: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  alert() {
    console.log('Этот цыпленок общается за железным занавесом... С ним в ГУЛАГ!',this.sendMessage);
    alert(this.sendMessage.burnAfterSending);
    
  }

}
